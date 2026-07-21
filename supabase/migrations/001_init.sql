-- 카페맵 초기 스키마
-- 적용: Supabase SQL Editor 또는 MCP apply_migration

-- ============ 프로필 (auth.users 확장) ============
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  nick text not null,
  name text,
  phone text,
  created_at timestamptz not null default now()
);

-- 회원가입 시 프로필 자동 생성 (nick은 메타데이터에서)
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, nick)
  values (new.id, coalesce(new.raw_user_meta_data->>'nick', split_part(new.email, '@', 1)));
  return new;
end $$;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============ 카페 ============
create table public.cafes (
  id bigint generated always as identity primary key,
  name text not null,
  addr text not null,
  phone text,
  lat double precision not null,
  lng double precision not null,
  price text,
  moods text[] not null default '{}',
  source text not null default 'user' check (source in ('public_data', 'user')),
  -- 커뮤니티 검증 상태: 등록 직후 pending → 확인 3표 이상 verified / 신고 누적 flagged
  status text not null default 'pending' check (status in ('pending', 'verified', 'flagged')),
  owner uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now()
);
create index cafes_location_idx on public.cafes (lat, lng);

-- ============ 카페 사진 ============
create table public.cafe_photos (
  id bigint generated always as identity primary key,
  cafe_id bigint not null references public.cafes on delete cascade,
  url text not null, -- storage 'cafe-photos' 버킷의 public URL
  uploader uuid references public.profiles (id) on delete set null,
  created_at timestamptz not null default now()
);

-- ============ 리뷰 (1인 1리뷰, 사진 포함) ============
create table public.reviews (
  id bigint generated always as identity primary key,
  cafe_id bigint not null references public.cafes on delete cascade,
  author uuid not null references public.profiles (id) on delete cascade,
  stars int not null check (stars between 1 and 5),
  text text not null,
  moods text[] not null default '{}',   -- 분위기 투표
  price text,                            -- 체감 가격대 투표
  photos text[] not null default '{}',   -- storage 'review-photos' public URL 목록
  created_at timestamptz not null default now(),
  unique (cafe_id, author)
);

-- ============ 찜 ============
create table public.favorites (
  user_id uuid not null references public.profiles on delete cascade,
  cafe_id bigint not null references public.cafes on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, cafe_id)
);

-- ============ 정보 검증 투표 (맞아요/달라요) ============
create table public.cafe_checks (
  user_id uuid not null references public.profiles on delete cascade,
  cafe_id bigint not null references public.cafes on delete cascade,
  is_correct boolean not null,          -- true=맞아요 / false=달라요
  reason text,                          -- 달라요 사유 (폐업/전화번호/위치 등)
  created_at timestamptz not null default now(),
  primary key (user_id, cafe_id)
);

-- 투표에 따라 카페 status 자동 갱신 (확인 3표↑ → verified, 신고 3표↑ → flagged)
create or replace function public.refresh_cafe_status()
returns trigger language plpgsql security definer set search_path = public as $$
declare
  target bigint := coalesce(new.cafe_id, old.cafe_id);
  ok_cnt int; bad_cnt int;
begin
  select count(*) filter (where is_correct), count(*) filter (where not is_correct)
    into ok_cnt, bad_cnt from public.cafe_checks where cafe_id = target;
  update public.cafes set status =
    case when bad_cnt >= 3 then 'flagged'
         when ok_cnt >= 3 then 'verified'
         else 'pending' end
  where id = target and source = 'user';
  return null;
end $$;
create trigger on_cafe_check_change
  after insert or update or delete on public.cafe_checks
  for each row execute function public.refresh_cafe_status();

-- ============ RLS ============
alter table public.profiles enable row level security;
alter table public.cafes enable row level security;
alter table public.cafe_photos enable row level security;
alter table public.reviews enable row level security;
alter table public.favorites enable row level security;
alter table public.cafe_checks enable row level security;

-- 읽기: 모두 공개
create policy "read profiles" on public.profiles for select using (true);
create policy "read cafes" on public.cafes for select using (true);
create policy "read cafe_photos" on public.cafe_photos for select using (true);
create policy "read reviews" on public.reviews for select using (true);
create policy "read favorites" on public.favorites for select using (auth.uid() = user_id);
create policy "read cafe_checks" on public.cafe_checks for select using (true);

-- 쓰기: 본인 것만
create policy "update own profile" on public.profiles for update using (auth.uid() = id);
create policy "insert cafes" on public.cafes for insert with check (auth.uid() = owner);
create policy "update own cafes" on public.cafes for update using (auth.uid() = owner);
create policy "delete own cafes" on public.cafes for delete using (auth.uid() = owner);
create policy "insert cafe_photos" on public.cafe_photos for insert with check (auth.uid() = uploader);
create policy "delete own cafe_photos" on public.cafe_photos for delete using (auth.uid() = uploader);
create policy "insert reviews" on public.reviews for insert with check (auth.uid() = author);
create policy "update own reviews" on public.reviews for update using (auth.uid() = author);
create policy "delete own reviews" on public.reviews for delete using (auth.uid() = author);
create policy "insert favorites" on public.favorites for insert with check (auth.uid() = user_id);
create policy "delete favorites" on public.favorites for delete using (auth.uid() = user_id);
create policy "insert cafe_checks" on public.cafe_checks for insert with check (auth.uid() = user_id);
create policy "update own cafe_checks" on public.cafe_checks for update using (auth.uid() = user_id);

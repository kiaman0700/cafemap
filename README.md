# ☕ 카페맵

내 주변 카페를 **가격대·분위기 취향**으로 찾는 사용자 참여형 카페 지도.

- 지도에서 카페 탐색 (카카오맵) · 이 지역에서 재검색 · 초성 검색 · 자동완성
- 가격대 / 분위기 필터 (복수 선택 AND)
- 리뷰 + 분위기·체감 가격 투표 → 카페 정보가 사용자 데이터로 쌓임
- 찜, 내 위치 기반 가까운 순, 로드뷰(카페 위치 핀 표시), 장소 공유 링크
- 사용자 카페 등록 + 커뮤니티 검증(맞아요/달라요 투표)

## 실행 (데모)

정적 사이트입니다. 카카오맵 JS 키가 도메인 검사를 하므로 로컬 서버로 여세요.

```bash
python -m http.server 5188
# http://localhost:5188
```

- 데모 계정: `test` / `test123`
- 데이터: 전국카페표준데이터(2026-07) 중 대구 1,400곳 (`cafes-data.js`)
- 데모에서는 리뷰·찜·계정이 localStorage에 저장됩니다.

## 프로덕션 구조 (진행 중)

| 영역 | 스택 |
|---|---|
| 프론트 | 정적 HTML/JS (현 데모) → supabase-js 연동 |
| DB/인증/스토리지 | Supabase (`supabase/migrations/001_init.sql`) |
| 시드 | `supabase/seed/seed_cafes.sql` (공공데이터 1,400곳) |
| 배포 | Vercel |
| 지도 | Kakao Maps JS SDK (배포 도메인을 카카오 개발자 콘솔에 등록 필요) |

스키마: `profiles` · `cafes`(출처/검증상태) · `cafe_photos` · `reviews`(1인 1리뷰, 사진, 분위기·가격 투표) · `favorites` · `cafe_checks`(커뮤니티 검증, 3표 이상 시 자동 상태 전환) — 전 테이블 RLS 적용.

스토리지 버킷(공개 읽기 / 로그인 쓰기): `cafe-photos`, `review-photos`

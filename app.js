/* ================================================================
   ★ 카카오맵 JavaScript 키를 여기에 붙여넣으세요 ★
   developers.kakao.com → 내 애플리케이션 → 앱 키 → JavaScript 키
   ================================================================ */
const KAKAO_APP_KEY = 'e9c4488853a47ff9d2714c7f969d52b2';

/* ===== SVG 아이콘 세트 (선형, currentColor) ===== */
const ICONS = {
  cup: '<path d="M5 8.5h11v5.5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14z"/><path d="M16 10h1.6a2.5 2.5 0 0 1 0 5H16"/><line x1="8" y1="3.5" x2="8" y2="5.5"/><line x1="12" y1="3.5" x2="12" y2="5.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
  list: '<line x1="8.5" y1="6" x2="21" y2="6"/><line x1="8.5" y1="12" x2="21" y2="12"/><line x1="8.5" y1="18" x2="21" y2="18"/><line x1="3.5" y1="6" x2="3.6" y2="6"/><line x1="3.5" y1="12" x2="3.6" y2="12"/><line x1="3.5" y1="18" x2="3.6" y2="18"/>',
  locate: '<circle cx="12" cy="12" r="6.5"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/><line x1="12" y1="2.5" x2="12" y2="5.5"/><line x1="12" y1="18.5" x2="12" y2="21.5"/><line x1="2.5" y1="12" x2="5.5" y2="12"/><line x1="18.5" y1="12" x2="21.5" y2="12"/>',
  filter: '<line x1="4" y1="7.5" x2="20" y2="7.5"/><circle cx="14.5" cy="7.5" r="2.4" fill="#fff"/><line x1="4" y1="16" x2="20" y2="16"/><circle cx="8.5" cy="16" r="2.4" fill="#fff"/>',
  pin: '<path d="M12 21.5S5.5 15.6 5.5 10.8a6.5 6.5 0 1 1 13 0c0 4.8-6.5 10.7-6.5 10.7z"/><circle cx="12" cy="10.8" r="2.3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .6 2.9.7a2 2 0 0 1 1.7 2z"/>',
  pencil: '<path d="M17 3.5a2.6 2.6 0 0 1 3.7 3.7L7.3 20.6 2.5 21.8l1.2-4.8z"/>',
  route: '<path d="M3.5 11.2 21 3l-8.2 17.5-2.3-7z"/>',
  heart: '<path d="M12 20.6l-1.3-1.2C6 15.1 3 12.3 3 8.9 3 6.2 5.1 4 7.7 4c1.5 0 3 .7 4.3 2.1C13.3 4.7 14.8 4 16.3 4 19 4 21 6.2 21 8.9c0 3.4-3 6.2-7.7 10.5z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 21v-.6A7.4 7.4 0 0 1 11.9 13h.2a7.4 7.4 0 0 1 7.4 7.4v.6"/>',
  key: '<circle cx="7.5" cy="15.5" r="4.5"/><path d="M10.8 12.2 21 2"/><path d="M15.5 7.5l3 3"/>',
  bell: '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  globe: '<circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a13.5 13.5 0 0 1 0 18 13.5 13.5 0 0 1 0-18z"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.3a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.1-2.5 3.6"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><line x1="21" y1="12" x2="9" y2="12"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  minus: '<line x1="5" y1="12" x2="19" y2="12"/>',
  x: '<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>',
  eye: '<path d="M1.5 12S5.5 4.8 12 4.8 22.5 12 22.5 12s-4 7.2-10.5 7.2S1.5 12 1.5 12z"/><circle cx="12" cy="12" r="3"/>',
  share: '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><line x1="8.4" y1="10.8" x2="15.6" y2="6.2"/><line x1="8.4" y1="13.2" x2="15.6" y2="17.8"/>',
  chart: '<line x1="5" y1="21" x2="5" y2="13"/><line x1="12" y1="21" x2="12" y2="7"/><line x1="19" y1="21" x2="19" y2="16"/>',
};
function ic(name, size = 16) {
  return `<svg class="ic" style="width:${size}px;height:${size}px" viewBox="0 0 24 24">${ICONS[name] || ''}</svg>`;
}
/* HTML의 <i data-ic="이름" data-size="크기"> 자리에 아이콘 렌더 */
function renderStaticIcons(root) {
  (root || document).querySelectorAll('i[data-ic]').forEach(el => {
    el.outerHTML = ic(el.dataset.ic, +(el.dataset.size || 16));
  });
}

/* ===== 앱 상태 ===== */
let map = null;
let geocoder = null;
let clusterer = null;
let currentCafe = null;
let cameFromList = false;
let selectedStars = 0;
let pendingPos = null;      // 등록용 클릭 좌표 {lat, lng}
let tempMarker = null;      // 등록용 임시 마커
let tempOverlay = null;     // 등록 버튼 오버레이
const markerByCafe = new Map();

/* 엑셀 데이터에 id/리뷰 필드 부여 */
const cafes = CAFE_DATA.map((c, i) => ({ id: i, reviews: [], mood: [], ...c }));

/* ===== 가짜 리뷰·분위기 데이터 생성 (화면 표시용, 원본 데이터는 그대로) ===== */
const MOOD_POOL = ['조용한', '공부하기 좋은', '감성적인', '애견동반', '디저트 맛집', '밤늦게까지'];
const REVIEW_TEXTS = [
  '원두가 신선하고 커피 맛이 깊어요. 재방문 의사 100%!',
  '조용해서 노트북 들고 작업하기 좋아요. 콘센트도 넉넉합니다.',
  '디저트가 정말 맛있어요. 특히 케이크 추천!',
  '사장님이 친절하시고 매장이 깨끗해요.',
  '분위기가 아늑해서 친구랑 수다 떨기 좋아요.',
  '창가 자리가 예뻐서 사진 찍기 좋습니다.',
  '가성비 최고예요. 이 가격에 이 퀄리티라니.',
  '좌석 간격이 넓어서 편하게 있다 왔어요.',
  '시그니처 메뉴 꼭 드셔보세요. 후회 없습니다.',
  '주차가 편해서 자주 가게 돼요.',
  '음악 선곡이 좋아서 오래 머물고 싶은 곳이에요.',
  '라떼 아트가 예술입니다. 맛도 좋아요.',
];
const REVIEW_USERS = ['커피순례자', '라떼장인', '디저트헌터', '카페투어러', '동네주민', '빵순이', '아아중독', '주말나들이'];

const PRICE_POOL = ['₩3,000~5,000', '₩5,000~7,000', '₩7,000~10,000'];

cafes.forEach((c, i) => {
  // 분위기 태그 1~3개: 시드 기반 난수로 부여해 모든 태그 조합이 고르게 나오도록
  const rnd = n => { const x = Math.sin(i * 997 + n * 131) * 10000; return x - Math.floor(x); };
  c.mood = MOOD_POOL.filter((m, k) => rnd(k) < 0.3).slice(0, 3);
  if (!c.mood.length) c.mood = [MOOD_POOL[i % 6]];
  c.price = PRICE_POOL[(i * 7 + 1) % 3];
  // 리뷰 0~3개 (약 3/4의 카페가 리뷰 보유)
  const n = i % 4;
  for (let k = 0; k < n; k++) {
    const m = ((i * 7 + k * 11) % 60) + 1; // 최근 2개월 내 날짜
    const d = new Date(2026, 6, 10 - m);
    c.reviews.push({
      user: REVIEW_USERS[(i + k * 3) % REVIEW_USERS.length],
      stars: 3 + ((i + k) % 3),
      date: d.toISOString().slice(0, 10),
      text: REVIEW_TEXTS[(i + k * 5) % REVIEW_TEXTS.length],
      moods: (i + k) % 3 ? [c.mood[0]] : c.mood.slice(0, 2), // 리뷰어의 분위기 투표
      price: (i + k) % 2 ? c.price : '',                     // 체감 가격대 투표
    });
  }
});

/* ===== localStorage 저장소 =====
   리뷰·찜·등록 카페·계정·세션이 새로고침 후에도 유지됨 */
const LS_KEY = 'cafemap_demo_v1';
let state;
try { state = JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch { state = {}; }
state.accounts = state.accounts || [];
state.baseReviews = state.baseReviews || {}; // 기본 카페에 단 내 리뷰 { cafeId: [review...] }
state.regCafes = state.regCafes || [];       // 내가 등록한 카페
state.favsByUser = state.favsByUser || {};   // 찜: 계정별 { favs: [기본 카페 id], favRids: [등록 카페 rid] }
// 구버전(전역 찜) 데이터는 test 계정으로 이관
if ((state.favs && state.favs.length) || (state.favRids && state.favRids.length)) {
  state.favsByUser.test = { favs: state.favs || [], favRids: state.favRids || [] };
}
delete state.favs;
delete state.favRids;
// 데모 기본 계정
if (!state.accounts.some(a => a.id === 'test')) {
  state.accounts.push({ id: 'test', pw: 'test123', nick: '커피러버', email: 'test@cafemap.demo' });
}
function saveState() { localStorage.setItem(LS_KEY, JSON.stringify(state)); }

/* ===== 로그인 / 회원가입 ===== */
let currentUser = state.session ? (state.accounts.find(a => a.id === state.session) || null) : null;

function openLogin() {
  closeModal('modal-signup');
  document.getElementById('modal-login').classList.add('open');
  setTimeout(() => document.getElementById('login-id').focus(), 100);
}
function doLogin() {
  const id = document.getElementById('login-id').value.trim();
  const pw = document.getElementById('login-pw').value;
  const acc = state.accounts.find(a => a.id === id && a.pw === pw);
  if (!acc) return toast('아이디 또는 비밀번호가 올바르지 않아요');
  currentUser = acc;
  state.session = acc.id;
  saveState();
  closeModal('modal-login');
  document.getElementById('login-id').value = '';
  document.getElementById('login-pw').value = '';
  loadUserFavs();
  updateAuthUI();
  if (document.getElementById('page-my').classList.contains('open')) renderMyPage();
  toast(`${acc.nick}님, 환영해요!`);
}
function doLogout() {
  currentUser = null;
  state.session = null;
  favOnly = false; // 찜 필터는 로그인 전용
  saveState();
  loadUserFavs();
  updateAuthUI();
  if (document.getElementById('page-my').classList.contains('open')) renderMyPage();
  toast('로그아웃 되었습니다');
}
function handleAuthItem() { currentUser ? doLogout() : openLogin(); }
function doSignup() {
  const id = document.getElementById('signup-id').value.trim();
  const pw = document.getElementById('signup-pw').value;
  const nick = document.getElementById('signup-nick').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  if (!id || !pw || !nick) return toast('아이디·비밀번호·닉네임을 모두 입력해 주세요');
  if (state.accounts.some(a => a.id === id)) return toast('이미 사용 중인 아이디예요');
  if (!document.getElementById('signup-agree').checked) return toast('이용약관에 동의해 주세요');
  const acc = { id, pw, nick, email };
  state.accounts.push(acc);
  currentUser = acc;
  state.session = id;
  saveState();
  closeModal('modal-signup');
  loadUserFavs(); // 새 계정은 빈 찜 목록으로 시작
  updateAuthUI();
  if (document.getElementById('page-my').classList.contains('open')) renderMyPage();
  toast(`가입 완료! ${nick}님, 환영해요`);
}
/* 로그인이 필요한 기능 앞에서 호출 */
function requireLogin() {
  if (currentUser) return true;
  toast('로그인이 필요한 기능이에요');
  openLogin();
  return false;
}
function updateAuthUI() {
  // 헤더: 비회원은 로그인/회원가입, 회원은 프로필 칩
  document.getElementById('header-right').innerHTML = currentUser
    ? `<button class="hbtn profile" onclick="openMyPage()" title="마이페이지">
         <span class="avatar-mini">${currentUser.nick[0]}</span>${currentUser.nick}
       </button>
       <button class="hbtn icon" onclick="openSettings()" title="설정">${ic('gear', 17)}</button>`
    : `<button class="hbtn primary" onclick="openLogin()">로그인</button>
       <button class="hbtn ghost" onclick="openSignup()">회원가입</button>
       <button class="hbtn icon" onclick="openSettings()" title="설정">${ic('gear', 17)}</button>`;
  // 설정 메뉴
  document.getElementById('settings-auth').innerHTML = currentUser
    ? `<span>${ic('logout', 15)} 로그아웃</span><small>${currentUser.nick}님 로그인 중 ›</small>`
    : `<span>${ic('key', 15)} 로그인</span><small>데모 계정: test / test123 ›</small>`;
  const signupItem = document.getElementById('settings-signup');
  if (signupItem) signupItem.style.display = currentUser ? 'none' : 'flex';
}

/* ===== 공용 확인/입력 모달 (브라우저 prompt·confirm 대체) =====
   uiAsk({title, msg, input, ok, danger}) → Promise
   - input 없음: 확인=true / 취소=false
   - input 있음: 확인=입력값(string) / 취소=null */
let askResolve = null;
function uiAsk({ title, msg = '', input = null, ok = '확인', danger = false }) {
  return new Promise(resolve => {
    askResolve = resolve;
    document.getElementById('ask-title').textContent = title;
    document.getElementById('ask-msg').textContent = msg;
    document.getElementById('ask-msg').style.display = msg ? 'block' : 'none';
    const wrap = document.getElementById('ask-input-wrap');
    const inp = document.getElementById('ask-input');
    wrap.style.display = input !== null ? 'block' : 'none';
    if (input !== null) inp.value = input;
    const okBtn = document.getElementById('ask-ok');
    okBtn.textContent = ok;
    okBtn.style.background = danger ? '#e03131' : '';
    document.getElementById('modal-ask').classList.add('open');
    if (input !== null) setTimeout(() => { inp.focus(); inp.select(); }, 80);
  });
}
function askDone(okPressed) {
  document.getElementById('modal-ask').classList.remove('open');
  const isInput = document.getElementById('ask-input-wrap').style.display !== 'none';
  const result = isInput
    ? (okPressed ? document.getElementById('ask-input').value : null)
    : okPressed;
  const r = askResolve; askResolve = null;
  if (r) r(result);
}

/* 온보딩: 최초 1회만 */
function closeOnboard() {
  closeModal('modal-onboard');
  state.seenOnboard = true;
  saveState();
}

/* ===== 카카오맵 SDK 로드 ===== */
function loadKakaoSdk() {
  if (!KAKAO_APP_KEY || KAKAO_APP_KEY.startsWith('YOUR_')) {
    showKeyGuide(); return;
  }
  const s = document.createElement('script');
  s.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`;
  s.onload = () => kakao.maps.load(initMap);
  s.onerror = showKeyGuide;
  document.head.appendChild(s);
}
function showKeyGuide() { document.getElementById('key-guide').style.display = 'flex'; }

/* ===== 커스텀 마커 이미지 ===== */
/* 기본: 작은 원형 (커피 브라운) — 지도가 가볍게 보이도록 */
const PIN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
  <circle cx="13" cy="13" r="11.5" fill="#6f4e37" stroke="#fdf6ee" stroke-width="1.8"/>
  <circle cx="13" cy="13" r="8" fill="#fdf6ee"/>
  <path d="M8.8 10.2h7v4a2.8 2.8 0 0 1-2.8 2.8h-1.4a2.8 2.8 0 0 1-2.8-2.8z" fill="#6f4e37"/>
  <path d="M15.8 11h1.1a1.6 1.6 0 0 1 0 3.2h-1.1z" fill="none" stroke="#6f4e37" stroke-width="1"/>
</svg>`;
/* 선택된 카페용 핀 (오렌지, 살짝 크게) */
const PIN_SVG_SELECTED = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 30 40">
  <path d="M15 1C7.3 1 1 7.3 1 15c0 10.2 12.2 22.3 13.2 23.3a1.1 1.1 0 0 0 1.6 0C16.8 37.3 29 25.2 29 15 29 7.3 22.7 1 15 1z"
        fill="#e8590c" stroke="#fff" stroke-width="1.4"/>
  <circle cx="15" cy="14.5" r="8.2" fill="#fff"/>
  <path d="M10.5 11.5h7.5v4.2a3 3 0 0 1-3 3h-1.5a3 3 0 0 1-3-3z" fill="#e8590c"/>
  <path d="M18 12.3h1.2a1.7 1.7 0 0 1 0 3.4H18z" fill="none" stroke="#e8590c" stroke-width="1.1"/>
</svg>`;
/* 찜한 카페용 원형 마커 (오렌지 하트) */
const PIN_SVG_FAV = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
  <circle cx="13" cy="13" r="11.5" fill="#fdf6ee" stroke="#e8590c" stroke-width="2"/>
  <g fill="#e8590c" stroke="none" transform="translate(1.9,2.1) scale(0.92)">${ICONS.heart}</g>
</svg>`;
let markerImage = null;
let markerImageSelected = null;
let markerImageFav = null;
function baseImageFor(id) { return favorites.has(id) ? markerImageFav : markerImage; }

/* ===== 지도 초기화 ===== */
function initMap() {
  map = new kakao.maps.Map(document.getElementById('map'), {
    center: new kakao.maps.LatLng(35.858, 128.55), // 대구 중심 (중구~달서구)
    level: 7,
  });
  geocoder = new kakao.maps.services.Geocoder();

  markerImage = new kakao.maps.MarkerImage(
    'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(PIN_SVG),
    new kakao.maps.Size(26, 26),
    { offset: new kakao.maps.Point(13, 13) } // 원형: 중심이 좌표에 오도록
  );
  markerImageSelected = new kakao.maps.MarkerImage(
    'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(PIN_SVG_SELECTED),
    new kakao.maps.Size(36, 48),
    { offset: new kakao.maps.Point(18, 48) }
  );
  markerImageFav = new kakao.maps.MarkerImage(
    'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(PIN_SVG_FAV),
    new kakao.maps.Size(26, 26),
    { offset: new kakao.maps.Point(13, 13) }
  );

  clusterer = new kakao.maps.MarkerClusterer({
    map, averageCenter: true, minLevel: 5, disableClickZoom: true,
    minClusterSize: 1, // 축소 상태에선 1개짜리도 숫자 버블로 (마커와 섞이지 않게)
    styles: [{
      width: '44px', height: '44px', borderRadius: '50%',
      background: 'rgba(111, 78, 55, .88)', border: '2px solid #fdf6ee',
      color: '#fff', fontSize: '13px', fontWeight: '700',
      textAlign: 'center', lineHeight: '41px',
      boxShadow: '0 3px 8px rgba(75,54,33,.28)',
    }],
  });

  cafes.forEach(addCafeMarker);
  clusterer.addMarkers([...markerByCafe.values()]);

  // 클러스터(숫자) 클릭 → 부드럽게 확대
  kakao.maps.event.addListener(clusterer, 'clusterclick', cluster => {
    map.setLevel(Math.max(map.getLevel() - 2, 1), {
      anchor: cluster.getCenter(), animate: { duration: 400 },
    });
  });

  // 애니메이션 중 부착된 라벨은 어긋난 좌표로 굳으므로, 지도가 멈출 때마다 위치 재계산
  kakao.maps.event.addListener(map, 'idle', () => {
    if (pinnedLabel) pinnedLabel.setPosition(pinnedLabel.getPosition());
  });

  // 카페 등록은 우클릭으로 (일반 클릭/드래그와 분리)
  kakao.maps.event.addListener(map, 'rightclick', e => showRegisterButton(e.latLng));
  document.getElementById('map').addEventListener('contextmenu', e => e.preventDefault());

  // 지도를 움직이면 "이 지역에서 재검색" 버튼 표시
  // (검색 중이면 누를 때 새 지도 중심 기준으로 재정렬됨)
  const showAreaBtn = () => { document.getElementById('area-btn').style.display = 'flex'; };
  kakao.maps.event.addListener(map, 'dragend', showAreaBtn);
  kakao.maps.event.addListener(map, 'zoom_changed', showAreaBtn);

  // 일반 클릭은 떠 있는 등록 버튼을 닫기만
  kakao.maps.event.addListener(map, 'click', removeTempMarker);

  document.getElementById('map-loading').style.display = 'none';

  // 최초 검색: 현재(대구 시내) 영역 기준으로 마커 표시
  areaBounds = map.getBounds();
  applyFilters(false);
  // 공유 링크로 들어왔으면 해당 카페를 열고, 아니면 내 위치 주변으로 시작
  if (!openSharedCafe()) autoLocate();
}

/* 카페 1곳의 마커 생성 */
function addCafeMarker(cafe) {
  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(cafe.lat, cafe.lng),
    title: cafe.name,
    image: baseImageFor(cafe.id),
  });
  kakao.maps.event.addListener(marker, 'click', () => openDetail(cafe.id, false));
  // 마우스를 올리면 이름·별점·분위기 라벨 표시
  kakao.maps.event.addListener(marker, 'mouseover', () => showHoverLabel(cafe));
  kakao.maps.event.addListener(marker, 'mouseout', scheduleHideLabel);
  markerByCafe.set(cafe.id, marker);
  return marker;
}

/* ===== 카페 라벨 오버레이 =====
   호버 라벨(임시)과 선택 라벨(고정)을 분리 — 선택한 카페의 라벨은 항상 유지 */
let hoverLabel = null;   // 마우스 오버 시 임시 라벨
let hoverCafeId = null;
let pinnedLabel = null;  // 선택(상세 열림)된 카페의 고정 라벨
let selectedCafeId = null;
let labelHideTimer = null;

function makeLabelOverlay(cafe, pinned) {
  const el = document.createElement('div');
  el.className = 'cafe-label' + (pinned ? ' pinned' : '');
  el.innerHTML = `
    <div class="cl-name">${cafe.name}</div>
    <div class="cl-meta">
      ${cafe.reviews.length ? `<span class="cl-star">★ ${avgRating(cafe).toFixed(1)}</span>` : '<span class="cl-new">리뷰 없음</span>'}
      <span class="cl-price">${cafe.price}</span>
    </div>
    <div class="cl-meta"><span class="cl-mood">${cafe.mood.join(' · ')}</span></div>`;
  el.onclick = () => openDetail(cafe.id, false);
  if (!pinned) {
    // 라벨 위로 커서가 올라가도 유지
    el.onmouseenter = () => clearTimeout(labelHideTimer);
    el.onmouseleave = scheduleHideLabel;
  }
  // 래퍼: 라벨 아래(핀 위) 영역은 클릭이 마커로 통과되도록
  const wrap = document.createElement('div');
  wrap.className = 'cafe-label-wrap' + (pinned ? ' pinned-wrap' : '');
  wrap.appendChild(el);
  const overlay = new kakao.maps.CustomOverlay({
    position: new kakao.maps.LatLng(cafe.lat, cafe.lng),
    content: wrap, xAnchor: 0, yAnchor: 0, zIndex: pinned ? 55 : 50, // 정렬은 wrap의 CSS transform이 담당
  });
  overlay.setMap(map);
  // 카카오가 만드는 컨테이너 div가 핀을 덮어 클릭을 막으므로 판정을 끔 (라벨 자체는 pointer-events:auto라 클릭 가능)
  if (wrap.parentElement) wrap.parentElement.style.pointerEvents = 'none';
  return overlay;
}

function showHoverLabel(cafe) {
  clearTimeout(labelHideTimer);
  if (cafe.id === selectedCafeId) return; // 선택된 카페는 고정 라벨이 이미 떠 있음
  if (hoverLabel && hoverCafeId === cafe.id) return; // 같은 카페면 유지 (깜빡임 방지)
  hideHoverLabel();
  hoverCafeId = cafe.id;
  hoverLabel = makeLabelOverlay(cafe, false);
}
function hideHoverLabel() {
  clearTimeout(labelHideTimer);
  if (hoverLabel) { hoverLabel.setMap(null); hoverLabel = null; }
  hoverCafeId = null;
}
/* 살짝 늦게 숨겨서 마커↔라벨 사이 이동 시 깜빡임 방지 */
function scheduleHideLabel() {
  clearTimeout(labelHideTimer);
  labelHideTimer = setTimeout(hideHoverLabel, 150);
}

/* ===== 마커 선택 표시 (오렌지 핀 + 고정 라벨) ===== */
function selectMarker(cafe) {
  clearSelection();
  selectedCafeId = cafe.id;
  const marker = markerByCafe.get(cafe.id);
  if (marker) { marker.setImage(markerImageSelected); marker.setZIndex(10); }
  hideHoverLabel();
  pinnedLabel = makeLabelOverlay(cafe, true);
}
function clearSelection() {
  if (selectedCafeId !== null) {
    const prev = markerByCafe.get(selectedCafeId);
    if (prev) { prev.setImage(baseImageFor(selectedCafeId)); prev.setZIndex(0); }
    selectedCafeId = null;
  }
  if (pinnedLabel) { pinnedLabel.setMap(null); pinnedLabel = null; }
}

/* ===== 지도 클릭 → 등록 버튼 ===== */
function showRegisterButton(latLng) {
  removeTempMarker();
  pendingPos = { lat: latLng.getLat(), lng: latLng.getLng() };

  tempMarker = new kakao.maps.Marker({ position: latLng, map });
  const btn = document.createElement('button');
  btn.className = 'reg-overlay-btn';
  btn.innerHTML = `${ic('plus', 13)} 이 위치에 카페 등록하기`;
  // 버튼 위 마우스 이벤트가 지도까지 전달되면 지도 클릭으로 처리되어 버튼이 먼저 제거됨 → 전달 차단
  ['mousedown', 'mouseup'].forEach(t => btn.addEventListener(t, e => e.stopPropagation()));
  btn.onclick = e => { e.stopPropagation(); openRegister(); };
  tempOverlay = new kakao.maps.CustomOverlay({ position: latLng, content: btn, yAnchor: 2.2, zIndex: 60 });
  tempOverlay.setMap(map);
}
function removeTempMarker() {
  if (tempMarker) { tempMarker.setMap(null); tempMarker = null; }
  if (tempOverlay) { tempOverlay.setMap(null); tempOverlay = null; }
}

/* ===== 패널 열고 닫기 ===== */
function closeAllPanels() {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('open'));
  hideHoverLabel();
  clearSelection();
}
function closePanel(id) {
  document.getElementById(id).classList.remove('open');
  if (id === 'panel-detail') { hideHoverLabel(); clearSelection(); }
}
function openList() {
  closeAllPanels();
  applyFilters(false);
  document.getElementById('panel-list').classList.add('open');
}
/* 검색바 클릭 → 패널 열고 검색창에 바로 포커스 */
function openSearch() {
  openList();
  setTimeout(() => document.getElementById('search-input').focus(), 260); // 패널 슬라이드 후 포커스
}
function backToList() {
  closePanel('panel-detail');
  if (cameFromList) openList();
}

/* ===== 내 위치 ===== */
let myPos = null;
let myPosOverlay = null;

function setMyPosMarker(pos) {
  if (!myPosOverlay) {
    const dot = document.createElement('div');
    dot.className = 'my-pos-dot';
    myPosOverlay = new kakao.maps.CustomOverlay({ position: pos, content: dot, xAnchor: 0, yAnchor: 0, zIndex: 45 });
    myPosOverlay.setMap(map);
  } else {
    myPosOverlay.setPosition(pos);
  }
}

function locateMe(onSuccess) {
  if (!map) return toast('지도를 불러온 뒤 이용할 수 있어요');
  if (!navigator.geolocation) return toast('이 브라우저는 위치 기능을 지원하지 않아요');
  toast('내 위치를 찾는 중...');
  navigator.geolocation.getCurrentPosition(p => {
    myPos = { lat: p.coords.latitude, lng: p.coords.longitude };
    const pos = new kakao.maps.LatLng(myPos.lat, myPos.lng);
    setMyPosMarker(pos);
    map.panTo(pos);
    toast('내 위치를 찾았어요');
    if (document.getElementById('panel-list').classList.contains('open')) applyFilters(false);
    if (onSuccess) onSuccess();
  }, () => toast('위치 권한을 허용해 주세요'), { enableHighAccuracy: true, timeout: 8000 });
}

/* 접속 시 내 위치 주변으로 시작 (거부하거나 주변에 데이터가 없으면 대구 시내 유지) */
function autoLocate() {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(p => {
    myPos = { lat: p.coords.latitude, lng: p.coords.longitude };
    const pos = new kakao.maps.LatLng(myPos.lat, myPos.lng);
    setMyPosMarker(pos);
    map.setLevel(5);
    map.setCenter(pos);
    setTimeout(() => {
      const b = map.getBounds();
      const near = getFiltered().filter(c => b.contain(new kakao.maps.LatLng(c.lat, c.lng))).length;
      if (near) {
        searchThisArea();
      } else {
        toast('내 주변에 등록된 카페가 없어 대구 시내를 보여드려요');
        map.setLevel(7);
        map.setCenter(new kakao.maps.LatLng(35.858, 128.55));
        setTimeout(searchThisArea, 400);
      }
    }, 400);
  }, () => {}, { timeout: 5000 });
}

/* 두 좌표 간 거리 (m) — 하버사인 */
function distM(a, b) {
  const R = 6371000, rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
  const h = Math.sin(dLat / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
function fmtDist(m) { return m < 1000 ? Math.round(m) + 'm' : (m / 1000).toFixed(1) + 'km'; }

/* ===== 찜(즐겨찾기) ===== */
const favorites = new Set();
function toggleFav(id) {
  if (!requireLogin()) return;
  if (favorites.has(id)) { favorites.delete(id); toast('찜을 해제했어요'); }
  else { favorites.add(id); toast('찜 목록에 추가했어요'); }
  const btn = document.getElementById('fav-btn-' + id);
  if (btn) btn.classList.toggle('on', favorites.has(id));
  // 지도 마커도 찜 표시로 교체 (선택된 카페는 오렌지 핀 유지)
  const mk = markerByCafe.get(id);
  if (mk && id !== selectedCafeId) mk.setImage(baseImageFor(id));
  // 리스트가 열려 있으면 하트 상태 갱신
  if (document.getElementById('panel-list').classList.contains('open')) applyFilters(false);
  persistFavs();
}
function persistFavs() {
  if (!currentUser) return;
  state.favsByUser[currentUser.id] = {
    favs: [...favorites].filter(i => i < CAFE_DATA.length),
    favRids: [...favorites].filter(i => i >= CAFE_DATA.length).map(i => cafes[i]?.rid).filter(Boolean),
  };
  saveState();
}

/* 로그인/로그아웃 시 현재 계정의 찜으로 교체 (마커 표시 포함) */
function loadUserFavs() {
  // 이전 계정의 찜 마커 원복
  [...favorites].forEach(id => {
    const mk = markerByCafe.get(id);
    if (mk && id !== selectedCafeId) mk.setImage(markerImage);
  });
  favorites.clear();
  if (currentUser) {
    const fu = state.favsByUser[currentUser.id];
    if (fu) {
      (fu.favs || []).forEach(id => { if (cafes[id]) favorites.add(id); });
      (fu.favRids || []).forEach(rid => {
        const c = cafes.find(x => x.rid === rid);
        if (c) favorites.add(c.id);
      });
    }
  }
  [...favorites].forEach(id => {
    const mk = markerByCafe.get(id);
    if (mk && id !== selectedCafeId) mk.setImage(markerImageFav);
  });
  if (document.getElementById('panel-list').classList.contains('open')) applyFilters(false);
}

/* ===== 검색 + 가격대/분위기 필터 ===== */
let listLimit = 50;
let listSort = 'default'; // 'default' | 'near'
let favOnly = false;      // 찜한 곳만 보기
let areaBounds = null;    // "이 지역에서 재검색" 영역

/* 이 지역에서 재검색 (네이버식): 마커를 현재 영역 기준으로 갱신.
   리스트는 열려 있을 때만 함께 갱신되고, 닫혀 있으면 강제로 열지 않음 */
function searchThisArea() {
  if (!map) return;
  areaBounds = map.getBounds();
  document.getElementById('area-btn').style.display = 'none';
  applyFilters(false);
}

/* 지도 확대/축소 (커스텀 줌 컨트롤) */
function zoomMap(d) {
  if (!map) return;
  map.setLevel(map.getLevel() + d, { animate: true });
}

/* 검색 결과가 보이게 지도 이동: 지도 중심에서 가까운 결과 최대 10곳 기준 (네이버식) */
function fitToResults() {
  if (!map) return;
  const all = getFiltered();
  if (!all.length) return;
  const ctr = mapCenterPos();
  const nearest = ctr ? [...all].sort((a, b) => distM(ctr, a) - distM(ctr, b)).slice(0, 10) : all.slice(0, 10);
  const b = new kakao.maps.LatLngBounds();
  nearest.forEach(c => b.extend(new kakao.maps.LatLng(c.lat, c.lng)));
  map.setBounds(b);
  setTimeout(() => searchThisArea(), 500); // 이동이 끝난 뒤 그 영역 기준으로 갱신
}

function toggleFavOnly() {
  if (!favOnly && !requireLogin()) return;
  favOnly = !favOnly;
  applyFilters();
}

/* 입력 즉시 제안·지우기 버튼 갱신, 무거운 마커 갱신은 디바운스 */
let searchDebounce = null;
function onSearchInput() {
  renderSuggest();
  document.getElementById('search-clear').style.display =
    document.getElementById('search-input').value ? 'flex' : 'none';
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => applyFilters(), 180);
}
function clearSearch() {
  const inp = document.getElementById('search-input');
  inp.value = '';
  applyFilters();
  renderSuggest();
  inp.focus();
}

/* ===== 검색 자동완성 + 최근 검색어 ===== */
function mapCenterPos() {
  return map ? { lat: map.getCenter().getLat(), lng: map.getCenter().getLng() } : null;
}
function renderSuggest() {
  const box = document.getElementById('suggest-box');
  const kw = document.getElementById('search-input').value.trim();
  let rows = '';
  if (kw) {
    const ctr = mapCenterPos();
    const matches = cafes.filter(c => !c.deleted && matchesKw(c, kw));
    if (ctr) matches.sort((a, b) => distM(ctr, a) - distM(ctr, b)); // 지도 중심에서 가까운 순
    rows = matches.slice(0, 5).map(c => `
      <div class="sg-row" onmousedown="pickSuggest(${c.id})">
        ${ic('pin', 13)}<span class="sg-name">${c.name}</span>
        <span class="sg-addr">${c.addr}</span>
        ${ctr ? `<span class="sg-dist">${fmtDist(distM(ctr, c))}</span>` : ''}
      </div>`).join('');
  } else if ((state.recent || []).length) {
    rows = `<div class="sg-title">최근 검색어</div>` + state.recent.map(k => `
      <div class="sg-row" onmousedown="applyRecent('${k.replace(/'/g, "\\'")}')">
        ${ic('search', 12)}<span class="sg-name" style="font-weight:400;">${k}</span>
      </div>`).join('');
  }
  box.innerHTML = rows;
  box.style.display = rows ? 'block' : 'none';
}
function hideSuggestSoon() { setTimeout(hideSuggestNow, 150); }
function hideSuggestNow() { document.getElementById('suggest-box').style.display = 'none'; }
function saveRecent(kw) {
  state.recent = [kw, ...(state.recent || []).filter(k => k !== kw)].slice(0, 5);
  saveState();
}
function pickSuggest(id) {
  const c = cafes.find(x => x.id === id);
  saveRecent(c.name);
  document.getElementById('search-input').value = c.name;
  hideSuggestNow();
  applyFilters();
  openDetail(id, true);
}
function applyRecent(kw) {
  document.getElementById('search-input').value = kw;
  applyFilters();
  renderSuggest();
}

/* ===== 지도 위 분위기 퀵 칩: 패널 필터와 동기화 ===== */
function quickMood(el) {
  const target = [...document.querySelectorAll('#mood-chips .fchip')]
    .find(m => m.textContent === el.textContent);
  if (target) target.click(); // toggleMood → applyFilters → 배지/칩 동기화
}
function syncQuickChips() {
  const on = new Set([...document.querySelectorAll('#mood-chips .fchip.on')].map(m => m.textContent));
  document.querySelectorAll('#quick-chips .fchip').forEach(q =>
    q.classList.toggle('on', on.has(q.textContent)));
}

/* 리스트 카드 호버 → 지도 마커에 라벨 표시 */
function hoverFromList(id) {
  const c = cafes.find(x => x.id === id);
  if (c && map && markerByCafe.has(id)) showHoverLabel(c);
}

function setSort(mode) {
  if (mode === 'near' && !myPos) {
    // 위치를 아직 모르면 먼저 위치를 얻고 나서 정렬
    locateMe(() => { listSort = 'near'; applyFilters(); });
    return;
  }
  listSort = mode;
  applyFilters();
}

function pickPrice(el) { // 가격대: 단일 선택
  el.parentElement.querySelectorAll('.fchip').forEach(x => x.classList.remove('on'));
  el.classList.add('on');
  applyFilters();
}
function toggleMood(el) { // 분위기: 복수 선택
  el.classList.toggle('on');
  applyFilters();
}

/* 초성 검색: 'ㅅㅌㅂㅅ' → 스타벅스 */
const CHO = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
function chosungOf(str) {
  let out = '';
  for (const ch of str) {
    const code = ch.charCodeAt(0) - 0xAC00;
    out += (code >= 0 && code < 11172) ? CHO[Math.floor(code / 588)] : ch;
  }
  return out;
}
function matchesKw(c, kw) {
  if (c.name.includes(kw) || c.addr.includes(kw)) return true;
  if (/^[ㄱ-ㅎ]+$/.test(kw.replace(/\s/g, ''))) {
    return (c._cho ||= chosungOf(c.name)).includes(kw.replace(/\s/g, ''));
  }
  return false;
}

function getFiltered() {
  const kw = document.getElementById('search-input').value.trim();
  const price = document.querySelector('#price-chips .fchip.on')?.dataset.v || '';
  const moods = [...document.querySelectorAll('#mood-chips .fchip.on')].map(x => x.textContent);
  return cafes.filter(c =>
    !c.deleted &&
    (!favOnly || favorites.has(c.id)) &&
    (!kw || matchesKw(c, kw)) &&
    (!price || c.price === price) &&
    (!moods.length || moods.every(m => c.mood.includes(m)))
  );
}

function applyFilters(resetLimit = true) {
  if (resetLimit) listLimit = 50;
  const filtered = getFiltered();
  // 이름/주소 검색은 전체 지역 대상 (특정 카페 찾기), 그 외엔 마지막 검색 영역 기준 (네이버식)
  const kwActive = !!document.getElementById('search-input').value.trim();
  const listFiltered = (!kwActive && areaBounds)
    ? filtered.filter(c => areaBounds.contain(new kakao.maps.LatLng(c.lat, c.lng)))
    : filtered;
  renderListItems(listFiltered, filtered.length);
  syncMarkers(listFiltered);
  updateFilterBadge();
  document.getElementById('search-clear').style.display = kwActive ? 'flex' : 'none';
  // 검색어/필터가 바뀌면 결과 처음부터 보이도록 (더 보기일 땐 위치 유지)
  if (resetLimit) document.getElementById('panel-scroll').scrollTop = 0;
}

/* 필터 버튼: 필터가 안 보이는 상태(접힘/스크롤로 밀려남)면 보여주고, 보이는 상태에서만 접음 */
function toggleFilterArea() {
  const area = document.getElementById('filter-area');
  const scroll = document.getElementById('panel-scroll');
  const collapsed = area.classList.contains('hidden');
  const outOfView = !collapsed &&
    area.getBoundingClientRect().bottom < scroll.getBoundingClientRect().top + 10;

  if (collapsed) {
    area.classList.remove('hidden');
    scroll.scrollTop = 0;
  } else if (outOfView) {
    scroll.scrollTop = 0; // 이미 펼쳐져 있으니 위로 올려 보여주기만
  } else {
    area.classList.add('hidden');
  }
}

/* 필터 초기화 (검색어는 유지) */
function resetFilters() {
  document.querySelectorAll('#price-chips .fchip').forEach(x =>
    x.classList.toggle('on', x.dataset.v === ''));
  document.querySelectorAll('#mood-chips .fchip.on').forEach(x => x.classList.remove('on'));
  applyFilters();
  toast('필터를 초기화했어요');
}

/* 적용 중인 필터 개수 배지 */
function updateFilterBadge() {
  const price = document.querySelector('#price-chips .fchip.on')?.dataset.v || '';
  const moods = document.querySelectorAll('#mood-chips .fchip.on').length;
  const n = (price ? 1 : 0) + moods;
  const badge = document.getElementById('filter-badge');
  const btn = document.getElementById('filter-btn');
  badge.style.display = n ? 'inline-block' : 'none';
  badge.textContent = n;
  btn.classList.toggle('active', n > 0);
  syncQuickChips(); // 지도 위 퀵 칩과 동기화
}

/* 필터 결과를 지도 마커에도 반영 */
function syncMarkers(filtered) {
  if (!clusterer) return;
  clusterer.clear();
  clusterer.addMarkers(filtered.map(c => markerByCafe.get(c.id)).filter(Boolean));
}

function renderListItems(filtered, globalCount) {
  const body = document.getElementById('list-body');
  const controls = `
    <div class="sort-row">
      <div class="fchip ${listSort === 'default' ? 'on' : ''}" onclick="setSort('default')">기본순</div>
      <div class="fchip ${listSort === 'near' ? 'on' : ''}" onclick="setSort('near')">가까운 순</div>
      <div class="fchip ${favOnly ? 'on' : ''}" onclick="toggleFavOnly()">찜한 곳만</div>
    </div>`;

  const kw = document.getElementById('search-input').value.trim();
  if (!filtered.length) {
    body.innerHTML = `${controls}
      <div style="text-align:center; padding:32px 0; color:#a39a8e; font-size:14px; line-height:1.7;">
        ${kw ? `'${kw}' 검색 결과가 없어요.` : '이 지역에는 조건에 맞는 카페가 없어요.'}<br>
        <div style="display:flex; gap:8px; justify-content:center; margin-top:14px; flex-wrap:wrap;">
          ${globalCount ? `<button class="more-btn" style="width:auto; padding:8px 16px;" onclick="fitToResults()">전체 지역에서 ${globalCount.toLocaleString()}곳 보기</button>` : ''}
          <button class="more-btn" style="width:auto; padding:8px 16px;" onclick="resetFilters()">필터 초기화</button>
          ${favOnly ? `<button class="more-btn" style="width:auto; padding:8px 16px;" onclick="toggleFavOnly()">찜 필터 해제</button>` : ''}
        </div>
      </div>`;
    return;
  }
  // 정렬: 내 위치 가까운 순 > 검색 중엔 지도 중심 가까운 순(네이버식) > 기본
  let sorted = filtered;
  let refPos = myPos; // 거리 표시 기준점
  if (listSort === 'near' && myPos) {
    sorted = [...filtered].sort((a, b) => distM(myPos, a) - distM(myPos, b));
  } else if (kw && map) {
    refPos = mapCenterPos();
    sorted = [...filtered].sort((a, b) => distM(refPos, a) - distM(refPos, b));
  }
  // 검색어/가격/분위기/찜 필터가 걸려 있을 때만 표시 (지역 재검색은 리스트에만 적용되므로 제외)
  const filterActive = !!(document.getElementById('search-input').value.trim()
    || document.querySelector('#price-chips .fchip.on')?.dataset.v
    || document.querySelectorAll('#mood-chips .fchip.on').length
    || favOnly);
  const items = sorted.slice(0, listLimit).map(c => `
    <div class="cafe-item" onclick="openDetail(${c.id}, true)"
         onmouseenter="hoverFromList(${c.id})" onmouseleave="scheduleHideLabel()">
      <div class="info">
        <div class="name">${c.name}${c.reviews.length ? `<span class="inline-rate">★ ${avgRating(c).toFixed(1)} <em>(${c.reviews.length})</em></span>` : ''}</div>
        <div class="meta">${c.addr}${refPos ? ` · <span class="dist-tag">${fmtDist(distM(refPos, c))}</span>` : ''}</div>
        ${c.phone ? `<div class="phone">${ic('phone', 11)} ${c.phone}</div>` : ''}
        <span class="chip price">${c.price}</span>${c.mood.slice(0, 2).map(m => `<span class="chip">${m}</span>`).join('')}
      </div>
      <button class="fav-btn mini${favorites.has(c.id) ? ' on' : ''}" title="찜하기"
        onclick="event.stopPropagation(); toggleFav(${c.id});"><svg viewBox="0 0 24 24">${ICONS.heart}</svg></button>
    </div>`).join('');

  body.innerHTML = `
    ${controls}
    <div class="list-count">${kw ? `'${kw}' 검색 결과` : '현재 지도 영역'} <b>${filtered.length.toLocaleString()}</b>곳${kw ? ' · 전체 지역' : (filterActive ? ' (필터 적용됨)' : '')}</div>
    ${items}
    ${filtered.length > listLimit ? `<button class="more-btn" onclick="listLimit += 50; applyFilters(false)">더 보기 (${listLimit} / ${filtered.length.toLocaleString()})</button>` : ''}`;
}

/* ===== 상세 ===== */
function starStr(n) { return '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n)); }
function avgRating(c) { return c.reviews.reduce((s, r) => s + r.stars, 0) / (c.reviews.length || 1); }

function openDetail(id, fromList) {
  cameFromList = !!fromList;
  currentCafe = cafes.find(c => c.id === id);
  if (!currentCafe || currentCafe.deleted) return;
  editingReviewIdx = null;
  closeAllPanels();
  removeTempMarker();

  // 지도 이동 + 이름표
  if (map) {
    const pos = new kakao.maps.LatLng(currentCafe.lat, currentCafe.lng);
    if (map.getLevel() > 4) {
      // 대상 위치를 기준으로 부드럽게 확대 → 애니메이션이 끝난(idle) 뒤 중앙 보정
      const onIdle = () => {
        kakao.maps.event.removeListener(map, 'idle', onIdle);
        focusOnMap(pos);
      };
      kakao.maps.event.addListener(map, 'idle', onIdle);
      map.setLevel(4, { anchor: pos, animate: { duration: 500 } });
    } else {
      focusOnMap(pos);
    }
    selectMarker(currentCafe);
  }

  const c = currentCafe;
  document.getElementById('detail-title').textContent = c.name;
  document.getElementById('detail-body').innerHTML = `
    <div class="detail-name">${c.name}<button class="fav-btn${favorites.has(c.id) ? ' on' : ''}" id="fav-btn-${c.id}" onclick="toggleFav(${c.id})" title="찜하기"><svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.53L12 21.35z"/></svg></button><button class="fav-btn" onclick="shareCafe()" title="링크 공유"><svg viewBox="0 0 24 24">${ICONS.share}</svg></button></div>
    <div class="detail-stars">
      ${c.reviews.length
        ? `${starStr(avgRating(c))} ${avgRating(c).toFixed(1)} <small>(리뷰 ${c.reviews.length}개)</small>`
        : `<small>아직 리뷰가 없어요. 첫 리뷰를 남겨보세요!</small>`}
    </div>
    <div class="detail-addr">${ic('pin', 13)} ${c.addr}</div>
    ${c.phone ? `<div class="detail-phone">${ic('phone', 13)} <a href="tel:${c.phone.replace(/[^0-9]/g, '')}">${c.phone}</a></div>` : ''}
    <div><span class="chip price">${c.price}</span>${c.mood.map(m => `<span class="chip">${m}</span>`).join('')}</div>
    ${renderVotes(c)}
    <div class="btn-row">
      <button class="btn review" onclick="toggleReviewForm()">${ic('pencil', 14)} 리뷰 남기기</button>
      <button class="btn route" onclick="openRoute()">${ic('route', 14)} 길찾기</button>
      <button class="btn rv" onclick="openRoadview()">${ic('eye', 14)} 로드뷰</button>
    </div>
    <div id="review-form">
      <div class="star-select" id="star-select">
        ${[1,2,3,4,5].map(i => `<span data-v="${i}" onclick="pickStar(${i})">★</span>`).join('')}
      </div>
      <textarea id="review-text" placeholder="이 카페는 어땠나요?"></textarea>
      <div class="fg-title">이 카페의 분위기는? (선택)</div>
      <div class="fchips" id="rv-moods">
        ${MOOD_POOL.map(m => `<div class="fchip" onclick="this.classList.toggle('on')">${m}</div>`).join('')}
      </div>
      <div class="fg-title">체감 가격대 (선택)</div>
      <select id="rv-price" style="width:100%; border:1px solid #e2d8ca; border-radius:8px; padding:8px 10px; font-size:13px; background:#fff;">
        <option value="">선택 안 함</option>
        <option value="₩3,000~5,000">₩3,000~5,000</option>
        <option value="₩5,000~7,000">₩5,000~7,000</option>
        <option value="₩7,000~10,000">₩7,000~10,000</option>
      </select>
      <button class="btn review" style="width:100%; margin-top:10px; height:38px;" onclick="submitReview()">리뷰 등록</button>
    </div>
    <div class="section-title">리뷰 (${c.reviews.length})
      ${c.reviews.length > 1 ? `<span class="review-sort">
        <button class="rs ${reviewSort === 'latest' ? 'on' : ''}" onclick="setReviewSort('latest')">최신순</button>
        <button class="rs ${reviewSort === 'stars' ? 'on' : ''}" onclick="setReviewSort('stars')">별점순</button>
      </span>` : ''}
    </div>
    <div id="review-list">${renderReviews()}</div>
  `;
  document.getElementById('panel-detail').classList.add('open');
}

/* 작성자 표시명: 계정 리뷰는 현재 닉네임을 조회 (닉네임 변경이 과거 리뷰에도 반영) */
function reviewerName(r) {
  if (r.owner) {
    const acc = state.accounts.find(a => a.id === r.owner);
    if (acc) return acc.nick;
  }
  return r.user;
}

let reviewSort = 'latest'; // 'latest' | 'stars'
function setReviewSort(mode) {
  reviewSort = mode;
  openDetail(currentCafe.id, cameFromList);
}
function renderReviews() {
  if (!currentCafe.reviews.length) {
    return `<div class="no-review">등록된 리뷰가 없습니다.</div>`;
  }
  // 원본 인덱스를 함께 보존 (내 리뷰 삭제용)
  const sorted = currentCafe.reviews.map((r, i) => [r, i]).sort((a, b) =>
    reviewSort === 'stars'
      ? (b[0].stars - a[0].stars || b[0].date.localeCompare(a[0].date))
      : b[0].date.localeCompare(a[0].date));
  return sorted.map(([r, i]) => `
    <div class="review-card">
      <div class="rc-top">
        <span><b style="color:#555;">${reviewerName(r)}</b> <span class="rstars">${starStr(r.stars)}</span></span>
        <span>${r.date}${currentUser && r.owner === currentUser.id
          ? ` <button class="rv-edit" onclick="editMyReview(${i})">수정</button><button class="rv-del" onclick="deleteMyReview(${i})">삭제</button>` : ''}</span>
      </div>
      <p>${r.text}</p>
    </div>`).join('');
}

/* 내 리뷰 삭제 */
async function deleteMyReview(idx) {
  const r = currentCafe.reviews[idx];
  if (!r || !currentUser || r.owner !== currentUser.id) return;
  const ok = await uiAsk({ title: '리뷰 삭제', msg: '내 리뷰를 삭제할까요?', ok: '삭제', danger: true });
  if (!ok) return;
  currentCafe.reviews.splice(idx, 1);
  const match = x => !(x.owner === r.owner && x.date === r.date && x.text === r.text);
  if (currentCafe.id < CAFE_DATA.length) {
    state.baseReviews[currentCafe.id] = (state.baseReviews[currentCafe.id] || []).filter(match);
  } else {
    const rc = state.regCafes.find(x => x.rid === currentCafe.rid);
    if (rc) rc.reviews = (rc.reviews || []).filter(match);
  }
  saveState();
  toast('리뷰를 삭제했어요');
  openDetail(currentCafe.id, cameFromList);
}

/* 왼쪽 패널을 제외한 지도 영역의 중앙에 오도록 이동 */
function focusOnMap(pos) {
  const proj = map.getProjection();
  const pt = proj.containerPointFromCoords(pos);
  // 상세 패널 폭 기준: 남는 지도 영역이 충분할 때만 그 중앙으로 보정
  const panelW = document.getElementById('panel-detail').getBoundingClientRect().width;
  const offset = (window.innerWidth - panelW > 100) ? panelW / 2 : 0;
  const target = proj.coordsFromContainerPoint(new kakao.maps.Point(pt.x - offset, pt.y));
  map.panTo(target);
}

/* ===== 로드뷰 (카페 위치 핀 + 이름표 + 자동 시점) ===== */
let roadview = null, rvClient = null, rvMarker = null, rvLabel = null, rvTarget = null;

function openRoadview() {
  if (!map || !currentCafe) return;
  rvClient = rvClient || new kakao.maps.RoadviewClient();
  rvTarget = currentCafe;
  const pos = new kakao.maps.LatLng(rvTarget.lat, rvTarget.lng);
  rvClient.getNearestPanoId(pos, 80, panoId => {
    if (!panoId) return toast('이 위치는 로드뷰가 제공되지 않아요');
    document.getElementById('rv-title').textContent = rvTarget.name;
    document.getElementById('modal-roadview').classList.add('open');
    if (!roadview) {
      roadview = new kakao.maps.Roadview(document.getElementById('roadview'));
      kakao.maps.event.addListener(roadview, 'init', placeRvMarker);
    }
    roadview.setPanoId(panoId, pos);
    setTimeout(() => {
      if (roadview.relayout) roadview.relayout();
      placeRvMarker(); // 같은 파노라마 재진입 등 init이 안 오는 경우 대비
    }, 400);
  });
}

/* 로드뷰 안에 카페 핀·이름표를 놓고, 시점을 카페 방향으로 돌림 */
function placeRvMarker() {
  if (!roadview || !rvTarget) return;
  try {
    const pos = new kakao.maps.LatLng(rvTarget.lat, rvTarget.lng);
    if (!rvMarker) rvMarker = new kakao.maps.Marker({ image: markerImageSelected });
    rvMarker.setPosition(pos);
    rvMarker.setMap(roadview);
    if (!rvLabel) rvLabel = new kakao.maps.CustomOverlay({ yAnchor: 1 });
    rvLabel.setPosition(pos);
    rvLabel.setContent(`<div class="rv-cafe-tag">${rvTarget.name}</div>`);
    rvLabel.setMap(roadview);
    // 열리자마자 카페를 바라보도록 시점 회전
    const proj = roadview.getProjection();
    const vp = proj.viewpointFromCoords(rvMarker.getPosition(), rvMarker.getAltitude());
    roadview.setViewpoint(vp);
  } catch (e) { /* 로드뷰가 아직 준비 전이면 init 이벤트에서 다시 시도됨 */ }
}

function closeRoadview() { document.getElementById('modal-roadview').classList.remove('open'); }

/* ===== 장소 공유 링크 ===== */
function shareCafe() {
  if (!currentCafe) return;
  const key = currentCafe.id < CAFE_DATA.length ? currentCafe.id : 'r:' + currentCafe.rid;
  const url = `${location.origin}${location.pathname}?cafe=${encodeURIComponent(key)}`;
  const done = () => toast('링크를 복사했어요. 붙여넣어 공유하세요');
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = url;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    done();
  };
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(url).then(done, fallback);
  else fallback();
}
/* 공유 링크로 접속: ?cafe=id 또는 ?cafe=r:rid → 해당 카페 열기 */
function openSharedCafe() {
  const key = new URLSearchParams(location.search).get('cafe');
  if (!key) return false;
  const target = key.startsWith('r:')
    ? cafes.find(c => c.rid === key.slice(2))
    : cafes.find(c => c.id === +key && c.id < CAFE_DATA.length);
  if (!target || target.deleted) return false;
  setTimeout(() => openDetail(target.id, false), 400);
  return true;
}

/* 길찾기: 카카오맵 길찾기 페이지 새 탭 (API 키 불필요) */
function openRoute() {
  const c = currentCafe;
  window.open(`https://map.kakao.com/link/to/${encodeURIComponent(c.name)},${c.lat},${c.lng}`, '_blank');
}

/* 리뷰들의 분위기·가격 투표 집계 */
function renderVotes(c) {
  const moodCnt = {}, priceCnt = {};
  c.reviews.forEach(r => {
    (r.moods || []).forEach(t => moodCnt[t] = (moodCnt[t] || 0) + 1);
    if (r.price) priceCnt[r.price] = (priceCnt[r.price] || 0) + 1;
  });
  const moods = Object.entries(moodCnt).sort((a, b) => b[1] - a[1]);
  const prices = Object.entries(priceCnt).sort((a, b) => b[1] - a[1]);
  if (!moods.length && !prices.length) return '';
  return `
    <div class="detail-row" style="background:#fffaf3; border:1px solid #f0e6d8; border-radius:10px; padding:10px 12px;">
      <div style="font-size:12px; font-weight:700; color:#8a7a68; margin-bottom:6px;">${ic('chart', 12)} 리뷰어들의 투표</div>
      ${moods.length ? `<div>${moods.map(([t, n]) => `<span class="chip">${t} <b>${n}</b></span>`).join('')}</div>` : ''}
      ${prices.length ? `<div style="margin-top:4px;">${prices.map(([t, n]) => `<span class="chip price">${t} <b>${n}</b></span>`).join('')}</div>` : ''}
    </div>`;
}

function toggleReviewForm() {
  if (!requireLogin()) return;
  if (currentCafe.reviews.some(r => r.owner === currentUser.id)) {
    return toast('이미 리뷰를 남긴 카페예요 (1인 1리뷰)');
  }
  const f = document.getElementById('review-form');
  f.style.display = f.style.display === 'block' ? 'none' : 'block';
  selectedStars = 0;
  updateStars();
}
function pickStar(n) { selectedStars = n; updateStars(); }
function updateStars() {
  document.querySelectorAll('#star-select span').forEach(s =>
    s.classList.toggle('on', +s.dataset.v <= selectedStars));
}
/* 내 리뷰 수정: 작성 폼을 기존 내용으로 채워서 열기 */
let editingReviewIdx = null;
function editMyReview(idx) {
  const r = currentCafe.reviews[idx];
  if (!r || !currentUser || r.owner !== currentUser.id) return;
  editingReviewIdx = idx;
  const f = document.getElementById('review-form');
  f.style.display = 'block';
  selectedStars = r.stars;
  updateStars();
  document.getElementById('review-text').value = r.text;
  document.querySelectorAll('#rv-moods .fchip').forEach(ch =>
    ch.classList.toggle('on', (r.moods || []).includes(ch.textContent)));
  document.getElementById('rv-price').value = r.price || '';
  f.scrollIntoView({ block: 'center' });
}
function persistReviewUpdate(oldR, newR) {
  const swap = arr => arr.map(x =>
    (x.owner === oldR.owner && x.date === oldR.date && x.text === oldR.text) ? newR : x);
  if (currentCafe.id < CAFE_DATA.length) {
    state.baseReviews[currentCafe.id] = swap(state.baseReviews[currentCafe.id] || []);
  } else {
    const rc = state.regCafes.find(x => x.rid === currentCafe.rid);
    if (rc) rc.reviews = swap(rc.reviews || []);
  }
  saveState();
}

function submitReview() {
  if (!requireLogin()) return;
  const text = document.getElementById('review-text').value.trim();
  if (!selectedStars) return toast('별점을 선택해 주세요');
  if (!text) return toast('리뷰 내용을 입력해 주세요');

  // 수정 모드
  if (editingReviewIdx !== null) {
    const old = currentCafe.reviews[editingReviewIdx];
    const updated = {
      ...old,
      stars: selectedStars,
      text,
      moods: [...document.querySelectorAll('#rv-moods .fchip.on')].map(t => t.textContent),
      price: document.getElementById('rv-price').value,
    };
    currentCafe.reviews[editingReviewIdx] = updated;
    persistReviewUpdate(old, updated);
    editingReviewIdx = null;
    toast('리뷰를 수정했어요');
    openDetail(currentCafe.id, cameFromList);
    return;
  }

  const review = {
    user: currentUser.nick,
    owner: currentUser.id, // 내 리뷰 식별용
    stars: selectedStars,
    date: new Date().toISOString().slice(0, 10),
    text,
    moods: [...document.querySelectorAll('#rv-moods .fchip.on')].map(t => t.textContent),
    price: document.getElementById('rv-price').value,
  };
  currentCafe.reviews.unshift(review);
  persistReview(currentCafe, review);
  toast('리뷰가 등록되었습니다! 리뷰 혜택 쿠폰이 지급됐어요');
  openDetail(currentCafe.id, cameFromList);
}
/* 리뷰 저장: 기본 카페는 baseReviews, 등록 카페는 regCafes 안에 */
function persistReview(cafe, review) {
  if (cafe.id < CAFE_DATA.length) {
    state.baseReviews[cafe.id] = [review, ...(state.baseReviews[cafe.id] || [])];
  } else {
    const rc = state.regCafes.find(r => r.rid === cafe.rid);
    if (rc) rc.reviews = [review, ...(rc.reviews || [])];
  }
  saveState();
}

/* ===== 카페 등록 ===== */
let editingCafeId = null; // 수정 모드일 때 대상 카페 id

function openRegister() {
  if (!requireLogin()) return;
  closeAllPanels();
  editingCafeId = null;
  document.getElementById('reg-title').textContent = '새 카페 등록';
  document.getElementById('reg-submit').textContent = '등록하기';
  document.getElementById('reg-name').value = '';
  document.getElementById('reg-phone').value = '';
  document.querySelectorAll('#reg-tags .tp').forEach(t => t.classList.remove('on'));
  const addrInput = document.getElementById('reg-addr');
  addrInput.value = '';
  addrInput.placeholder = '주소를 불러오는 중...';
  // 클릭 좌표 → 주소 자동 입력 (역지오코딩)
  if (geocoder && pendingPos) {
    geocoder.coord2Address(pendingPos.lng, pendingPos.lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK && result[0]) {
        const r = result[0];
        addrInput.value = r.road_address ? r.road_address.address_name : r.address.address_name;
      } else {
        addrInput.placeholder = '주소를 찾지 못했어요. 직접 입력해 주세요.';
      }
    });
  }
  document.getElementById('panel-register').classList.add('open');
}

function confirmRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const addr = document.getElementById('reg-addr').value.trim();
  if (!name) return toast('카페 이름을 입력해 주세요');
  if (!addr) return toast('주소를 입력해 주세요');
  if (editingCafeId !== null) return doRegister(); // 수정 모드는 확인 팝업 없이 바로 저장
  const phone = document.getElementById('reg-phone').value.trim();
  document.getElementById('confirm-text').innerHTML =
    `<b>${name}</b><br>${addr}${phone ? `<br>${phone}` : ''}<br><br>위 정보로 카페를 등록합니다.`;
  document.getElementById('modal-confirm').classList.add('open');
}

function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const tags = [...document.querySelectorAll('#reg-tags .tp.on')].map(t => t.textContent);
  const price = document.getElementById('reg-price').value;
  const addr = document.getElementById('reg-addr').value.trim();

  // === 수정 모드 ===
  if (editingCafeId !== null) {
    const cafe = cafes.find(c => c.id === editingCafeId);
    Object.assign(cafe, { name, addr, price, mood: tags });
    if (phone) cafe.phone = phone; else delete cafe.phone;
    const rc = state.regCafes.find(r => r.rid === cafe.rid);
    if (rc) Object.assign(rc, { name, addr, price, mood: tags, phone: phone || undefined });
    saveState();
    closePanel('panel-register');
    editingCafeId = null;
    toast(`'${name}' 정보가 수정되었습니다`);
    openDetail(cafe.id, false);
    return;
  }

  // === 신규 등록 ===
  const cafe = {
    id: cafes.length,
    rid: 'r' + Date.now(),
    owner: currentUser ? currentUser.id : null,
    name, addr,
    lat: pendingPos ? pendingPos.lat : 35.858,
    lng: pendingPos ? pendingPos.lng : 128.55,
    price,
    mood: tags,
    reviews: [],
  };
  if (phone) cafe.phone = phone;   // 전화번호는 입력했을 때만 등록
  cafes.push(cafe);

  // localStorage에 저장
  const saved = { rid: cafe.rid, owner: cafe.owner, name, addr, lat: cafe.lat, lng: cafe.lng, price, mood: tags, reviews: [] };
  if (phone) saved.phone = phone;
  state.regCafes.push(saved);
  saveState();

  if (map) clusterer.addMarker(addCafeMarker(cafe));

  closeModal('modal-confirm');
  closePanel('panel-register');
  removeTempMarker();
  document.getElementById('reg-name').value = '';
  document.getElementById('reg-phone').value = '';
  document.querySelectorAll('#reg-tags .tp').forEach(t => t.classList.remove('on'));
  toast(`'${name}' 카페가 등록되었습니다!`);
  openDetail(cafe.id, false);
}

/* 내가 등록한 카페 수정: 등록 폼을 수정 모드로 열기 */
function openEditCafe(id) {
  const cafe = cafes.find(c => c.id === id);
  if (!cafe) return;
  goHome();
  editingCafeId = id;
  document.getElementById('reg-title').textContent = '카페 정보 수정';
  document.getElementById('reg-submit').textContent = '수정 저장';
  document.getElementById('reg-name').value = cafe.name;
  document.getElementById('reg-addr').value = cafe.addr;
  document.getElementById('reg-phone').value = cafe.phone || '';
  document.getElementById('reg-price').value = cafe.price;
  document.querySelectorAll('#reg-tags .tp').forEach(t =>
    t.classList.toggle('on', cafe.mood.includes(t.textContent)));
  document.getElementById('panel-register').classList.add('open');
}

/* 내가 등록한 카페 삭제 */
async function deleteMyCafe(id) {
  const cafe = cafes.find(c => c.id === id);
  if (!cafe) return;
  const ok = await uiAsk({
    title: '카페 삭제',
    msg: `'${cafe.name}'을(를) 삭제할까요?\n이 작업은 되돌릴 수 없어요.`,
    ok: '삭제', danger: true,
  });
  if (!ok) return;
  cafe.deleted = true;
  const marker = markerByCafe.get(id);
  if (marker) { clusterer.removeMarker(marker); markerByCafe.delete(id); }
  favorites.delete(id);
  state.regCafes = state.regCafes.filter(r => r.rid !== cafe.rid);
  persistFavs(); // saveState 포함
  renderMyPage();
  toast('카페가 삭제되었습니다');
}

/* ===== 페이지 전환 ===== */
function goHome() {
  document.querySelectorAll('.fullpage').forEach(p => p.classList.remove('open'));
  closeAllPanels();
}
function openMyPage() {
  goHome();
  renderMyPage();
  document.getElementById('page-my').classList.add('open');
}

/* 마이페이지: 로그인 여부에 따라 비회원/회원 화면 분기 */
function renderMyPage() {
  const guest = !currentUser;
  document.getElementById('my-guest').style.display = guest ? 'block' : 'none';
  document.getElementById('my-member').style.display = guest ? 'none' : 'block';
  if (guest) return;
  document.getElementById('my-avatar').textContent = currentUser.nick[0];
  document.getElementById('my-nickname').textContent = currentUser.nick;
  document.getElementById('my-email').textContent = currentUser.email || '(이메일 미등록)';
  document.getElementById('info-nick').value = currentUser.nick;
  document.getElementById('info-name').value = currentUser.name || '';
  document.getElementById('info-email').value = currentUser.email || '';
  document.getElementById('info-phone').value = currentUser.phone || '';
  renderMyFavs();
  renderMyCafes();
  renderMyReviews();
}

/* 마이페이지: 내가 등록한 카페 (수정/삭제) */
function renderMyCafes() {
  const mine = cafes.filter(c => !c.deleted && c.owner === currentUser.id);
  document.getElementById('my-cafe-count').textContent = `(${mine.length}곳)`;
  document.getElementById('my-cafes').innerHTML = mine.length
    ? mine.map(c => `
      <div class="myreview">
        <div class="mr-left" style="cursor:pointer;" onclick="goHome(); openDetail(${c.id}, false);">
          <b>${c.name}</b><p>${c.addr}</p>
        </div>
        <div class="mr-right" style="display:flex; gap:6px;">
          <button class="rs" style="border:1px solid #e2d8ca; border-radius:8px; padding:4px 10px; background:#fff; cursor:pointer; font-size:12px;" onclick="openEditCafe(${c.id})">수정</button>
          <button class="rs" style="border:1px solid #ffc9c9; border-radius:8px; padding:4px 10px; background:#fff; color:#e03131; cursor:pointer; font-size:12px;" onclick="deleteMyCafe(${c.id})">삭제</button>
        </div>
      </div>`).join('')
    : `<div class="no-review">아직 등록한 카페가 없어요. 지도를 우클릭해 등록해보세요!</div>`;
}

/* 마이페이지: 찜한 카페 목록 */
function renderMyFavs() {
  const favs = cafes.filter(c => favorites.has(c.id));
  document.getElementById('my-fav-count').textContent = `(${favs.length}곳)`;
  document.getElementById('my-favs').innerHTML = favs.length
    ? favs.map(c => `
      <div class="myreview" style="cursor:pointer;" onclick="goHome(); openDetail(${c.id}, false);">
        <div class="mr-left"><b>${c.name}</b><p>${c.addr}</p></div>
        <div class="mr-right">
          ${c.reviews.length ? `<div class="s">★ ${avgRating(c).toFixed(1)}</div>` : ''}
          <div class="d">${c.price}</div>
        </div>
      </div>`).join('')
    : `<div class="no-review">아직 찜한 카페가 없어요. 카페 상세에서 하트를 눌러보세요!</div>`;
}
function openSettings() {
  goHome();
  document.getElementById('page-settings').classList.add('open');
}
function openSignup() {
  // 이전 입력값 초기화
  ['signup-id', 'signup-pw', 'signup-nick', 'signup-email'].forEach(id =>
    document.getElementById(id).value = '');
  document.getElementById('signup-agree').checked = false;
  document.getElementById('modal-signup').classList.add('open');
}
function openOnboard() { document.getElementById('modal-onboard').classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

/* ===== 마이페이지 ===== */
/* 내가 쓴 리뷰: 전체 카페에서 내 계정(owner)의 리뷰를 수집 */
function renderMyReviews() {
  const mine = [];
  cafes.forEach(c => {
    if (c.deleted) return;
    c.reviews.forEach(r => { if (r.owner === currentUser.id) mine.push({ cafe: c.name, cafeId: c.id, ...r }); });
  });
  mine.sort((a, b) => b.date.localeCompare(a.date));
  document.getElementById('my-review-count').textContent = `(${mine.length}개)`;
  document.getElementById('my-reviews').innerHTML = mine.length
    ? mine.map(r => `
      <div class="myreview" style="cursor:pointer;" onclick="goHome(); openDetail(${r.cafeId}, false);">
        <div class="mr-left"><b>${r.cafe}</b><p>${r.text}</p></div>
        <div class="mr-right"><div class="s">${starStr(r.stars)}</div><div class="d">${r.date}</div></div>
      </div>`).join('')
    : `<div class="no-review">아직 작성한 리뷰가 없어요. 카페에 첫 리뷰를 남겨보세요!</div>`;
}
async function editNickname() {
  if (!currentUser) return;
  const v = await uiAsk({ title: '닉네임 수정', input: currentUser.nick, ok: '저장' });
  if (typeof v === 'string' && v.trim()) {
    currentUser.nick = v.trim();
    saveState();
    renderMyPage();
    updateAuthUI();
    toast('닉네임이 변경되었습니다');
  }
}
function saveInfo() {
  if (!currentUser) return;
  currentUser.nick = document.getElementById('info-nick').value.trim() || currentUser.nick;
  currentUser.name = document.getElementById('info-name').value.trim();
  currentUser.email = document.getElementById('info-email').value.trim();
  currentUser.phone = document.getElementById('info-phone').value.trim();
  saveState();
  renderMyPage();
  updateAuthUI();
  toast('회원정보가 저장되었습니다');
}

/* ===== 토스트 ===== */
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.style.display = 'none'), 2600);
}

/* ===== 퀵 칩 가로 스크롤 (휠 + 드래그) ===== */
(function initQuickChipScroll() {
  const qc = document.getElementById('quick-chips');
  // 휠 → 가로 스크롤
  qc.addEventListener('wheel', e => {
    if (!e.deltaY) return;
    e.preventDefault();
    qc.scrollLeft += e.deltaY;
  }, { passive: false });
  // 드래그로 끌기
  let drag = null;
  qc.addEventListener('pointerdown', e => { drag = { x: e.clientX, sl: qc.scrollLeft, moved: false }; });
  window.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 4) drag.moved = true;
    qc.scrollLeft = drag.sl - dx;
  });
  window.addEventListener('pointerup', () => { setTimeout(() => { drag = null; }, 0); });
  // 드래그한 경우엔 칩 클릭(토글)으로 처리하지 않음
  qc.addEventListener('click', e => {
    if (drag && drag.moved) { e.stopPropagation(); e.preventDefault(); }
  }, true);
  // 스크롤 여지가 있는 쪽 가장자리 페이드 표시
  const updateFade = () => {
    qc.classList.toggle('fade-l', qc.scrollLeft > 4);
    qc.classList.toggle('fade-r', qc.scrollLeft + qc.clientWidth < qc.scrollWidth - 4);
  };
  qc.addEventListener('scroll', updateFade);
  window.addEventListener('resize', updateFade);
  updateFade();
})();

/* ===== ESC로 닫기: 제안 → 모달 → 마이페이지/설정 → 패널 순 ===== */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const suggest = document.getElementById('suggest-box');
  if (suggest.style.display === 'block') return hideSuggestNow();
  const openModal = document.querySelector('.modal-back.open');
  if (openModal) {
    if (openModal.id === 'modal-ask') return askDone(false); // 취소로 처리
    return openModal.id === 'modal-onboard' ? closeOnboard() : openModal.classList.remove('open');
  }
  if (document.querySelector('.fullpage.open')) return goHome();
  if (document.querySelector('.panel.open')) return closeAllPanels();
  removeTempMarker();
});

/* ===== 저장된 데이터 복원 (지도 초기화 전에 실행) ===== */
(function restoreState() {
  // 기본 카페에 남긴 내 리뷰
  Object.entries(state.baseReviews).forEach(([id, arr]) => {
    const c = cafes[+id];
    if (c) c.reviews.unshift(...arr);
  });
  // 내가 등록한 카페
  state.regCafes.forEach(rc => {
    const cafe = {
      id: cafes.length, rid: rc.rid, owner: rc.owner,
      name: rc.name, addr: rc.addr, lat: rc.lat, lng: rc.lng,
      price: rc.price, mood: rc.mood || [], reviews: rc.reviews || [],
    };
    if (rc.phone) cafe.phone = rc.phone;
    cafes.push(cafe);
  });
  // 찜: 복원된 세션 계정의 것만 (마커 생성 전이라 Set만 채움 — 마커는 baseImageFor로 반영됨)
  loadUserFavs();
  // 온보딩은 최초 1회만
  if (state.seenOnboard) document.getElementById('modal-onboard').classList.remove('open');
  renderStaticIcons(); // <i data-ic> 자리에 SVG 아이콘 렌더
  updateAuthUI();
})();

loadKakaoSdk();

// 에듀테크 포털 16대 학습 도구 카탈로그 데이터
const TOOLS_DATA = [
  // 1. 유아 및 미취학 (3~7세)
  {
    id: "hangeul-block",
    name: "한글 자모 결합 블록",
    category: "toddler",
    ageBadge: "유아 4~7세",
    icon: "🧩",
    summary: "드래그 앤 드롭 자모 결합으로 한글의 음절 조합론적 제자 원리와 음가를 즉시 체득하는 파닉스 도구.",
    tags: ["한글 파닉스", "자모 결합", "음성 합성 TTS", "자모 도감"],
    url: "https://hangeul-block.enjoy-onepage.com/"
  },
  {
    id: "ten-frame-farm",
    name: "수 감각 텐프레임 터치 팜",
    category: "toddler",
    ageBadge: "유아 3~6세",
    icon: "🐣",
    summary: "2x5 격자 울타리와 동물 카운터 터치 스냅으로 10의 보수와 덧셈·뺄셈의 기초 수 감각을 내면화하는 도구.",
    tags: ["수 감각", "10의 보수", "실로폰 음계", "직관적 수량"],
    url: "https://ten-frame-farm.enjoy-onepage.com/"
  },
  {
    id: "sound-match-quest",
    name: "사운드-그림 청각 매칭 퀘스트",
    category: "toddler",
    ageBadge: "영유아 3~5세",
    icon: "🔔",
    summary: "실제 환경음·자연음과 일러스트 카드를 연결하여 청각 집중력과 어휘 인과관계를 체계적으로 발달시키는 퀘스트.",
    tags: ["청각 훈련", "음향 인지", "Web Audio 합성", "청각 퀴즈"],
    url: "https://sound-match-quest.enjoy-onepage.com/"
  },
  {
    id: "stroke-tracer",
    name: "선 따라 쓱쓱 스트로크 트레이서",
    category: "toddler",
    ageBadge: "유아 4~7세",
    icon: "✏️",
    summary: "한글 자음 및 숫자의 올바른 획순 가이드를 따라 그리며 소근육 조작력과 문자 형태 감각을 기르는 캔버스 트레이서.",
    tags: ["획순 훈련", "소근육 발달", "크레용 사운드", "운필력 완성"],
    url: "https://stroke-tracer.enjoy-onepage.com/"
  },

  // 2. 초등학생 (8~13세)
  {
    id: "fraction-pizza",
    name: "분수 피자 슬라이서",
    category: "elementary",
    ageBadge: "초등 3~6학년",
    icon: "🍕",
    summary: "원형 피자 조각 분할과 시각적 저울을 통해 동치분수, 통분, 분수 덧셈의 개념을 수포자 없이 직관적으로 이해.",
    tags: ["분수 시각화", "동치분수", "통분 계산기", "초등 수학"],
    url: "https://fraction-pizza.enjoy-onepage.com/"
  },
  {
    id: "times-table-matrix",
    name: "구구단 아케이드 넘버 매트릭스",
    category: "elementary",
    ageBadge: "초등 2~4학년",
    icon: "🔢",
    summary: "10x10 면적 모델 그리드와 90도 회전 교환법칙 모핑으로 구구단의 기하학적 의미를 터득하는 타임어택 아케이드.",
    tags: ["구구단", "면적 모델", "곱셈 교환법칙", "타임어택 퀴즈"],
    url: "https://times-table-matrix.enjoy-onepage.com/"
  },
  {
    id: "spelling-detective",
    name: "받아쓰기 맞춤법 탐정단",
    category: "elementary",
    ageBadge: "초등 1~4학년",
    icon: "🔍",
    summary: "초등 빈출 10대 혼동 맞춤법과 띄어쓰기 문맥을 돋보기 단서로 추리하고 교정하는 인터랙티브 탐정 퀘스트.",
    tags: ["맞춤법", "띄어쓰기", "초등 국어", "레벤슈타인 분석"],
    url: "https://spelling-detective.enjoy-onepage.com/"
  },
  {
    id: "unit-scale-explorer",
    name: "인터랙티브 단위 변환 연구소",
    category: "elementary",
    ageBadge: "초등 3~6학년",
    icon: "📏",
    summary: "mm에서 km까지 연속 무한 줌 스케일러와 실시간 면적 타일링으로 헷갈리는 수학·과학 단위를 체감하는 실험실.",
    tags: ["단위 변환", "무한 줌", "면적 타일링", "길이·넓이·무게"],
    url: "https://unit-scale-explorer.enjoy-onepage.com/"
  },

  // 3. 중·고등학생 (14~19세)
  {
    id: "ebbinghaus-vocab",
    name: "망각곡선 보카 부스터",
    category: "secondary",
    ageBadge: "중·고등/수험생",
    icon: "📖",
    summary: "에빙하우스 망각곡선과 FSRS 간격 반복 알고리즘을 결합하여 영구 장기기억으로 고착화하는 영단어 보카 엔진.",
    tags: ["FSRS 알고리즘", "간격 반복", "교육부 3000단어", "3D 카드 플립"],
    url: "https://ebbinghaus-vocab.enjoy-onepage.com/"
  },
  {
    id: "verlet-physics-lab",
    name: "2D 물리 역학 시뮬레이터",
    category: "secondary",
    ageBadge: "중·고등/이공계",
    icon: "⚛️",
    summary: "베를레 수치적분 엔진 기반으로 포물선 운동, 단진자 역학적 에너지 보존, 행성 만유인력 궤도를 직접 조작하는 물리 랩.",
    tags: ["물리 시뮬레이터", "베를레 적분", "에너지 보존", "포물선 운동"],
    url: "https://verlet-physics-lab.enjoy-onepage.com/"
  },
  {
    id: "function-morph-lab",
    name: "수학 함수 동적 모핑 캔버스",
    category: "secondary",
    ageBadge: "중3~고등학생",
    icon: "📈",
    summary: "계수 슬라이더 조작 시 60fps로 실시간 변형되는 직교좌표계 함수 곡선 및 도함수 접선 트래커를 제공하는 수학 랩.",
    tags: ["함수 그래프", "동적 모핑", "도함수 접선", "이차·삼차·삼각함수"],
    url: "https://function-morph-lab.enjoy-onepage.com/"
  },
  {
    id: "markdown-flashcard-srs",
    name: "마크다운 플래시카드 SRS",
    category: "secondary",
    ageBadge: "중고등/고시생",
    icon: "🗂️",
    summary: "마크다운 빈칸 천공(Cloze) 문법을 자동으로 파싱하여 고효율 3D 플립 카드 덱으로 전환해 주는 SRS 학습 스튜디오.",
    tags: ["마크다운 플래시카드", "Cloze 빈칸", "SRS 복습", "한국사/탐구 덱"],
    url: "https://markdown-flashcard-srs.enjoy-onepage.com/"
  },

  // 4. 대학생 및 성인 (20세 이상)
  {
    id: "pomodoro-metacog",
    name: "메타인지 포모도로 & 딥워크 로그",
    category: "adult",
    ageBadge: "대학/성인 수험생",
    icon: "⏱️",
    summary: "25분 집중 타이머와 세션 종료 직후 메타인지 집중도 회고 로그를 결합하여 몰입 상태를 과학적으로 관리하는 도구.",
    tags: ["뽀모도로 타이머", "메타인지 회고", "바이노럴 비트", "딥워크 분석"],
    url: "https://pomodoro-metacog.enjoy-onepage.com/"
  },
  {
    id: "probability-dist-lab",
    name: "대화형 통계/확률 분포 실험실",
    category: "adult",
    ageBadge: "대학생/취준생",
    icon: "📊",
    summary: "정규·이항·포아송 분포 곡선 및 10,000회 몬테카를로 중심극한정리(CLT) 시뮬레이션으로 통계 직관을 완성하는 도구.",
    tags: ["통계 분포", "중심극한정리 CLT", "몬테카를로 시뮬레이션", "확률 밀도"],
    url: "https://probability-dist-lab.enjoy-onepage.com/"
  },
  {
    id: "latex-svg-renderer",
    name: "실시간 LaTeX 수식 & SVG 렌더러",
    category: "adult",
    ageBadge: "대학/대학원생",
    icon: "📐",
    summary: "수식 입력 즉시 고해상도 벡터 SVG 패스 및 300DPI 투명 PNG로 실시간 렌더링·내보내기 하는 학술 수식 스튜디오.",
    tags: ["LaTeX 수식", "무손실 SVG", "MathJax 렌더링", "학술 논문/과제"],
    url: "https://latex-svg-renderer.enjoy-onepage.com/"
  },
  {
    id: "mind-logic-canvas",
    name: "인피니트 로직 트리 & 마인드 캔버스",
    category: "adult",
    ageBadge: "기획자/연구원",
    icon: "🧠",
    summary: "Tab과 Enter만으로 100% 키보드 조작 가능한 무한 캔버스 로직 트리 및 MECE 문제 해결 구조화 스튜디오.",
    tags: ["로직 트리", "마인드맵", "MECE 문제 해결", "키보드 숏컷"],
    url: "https://mind-logic-canvas.enjoy-onepage.com/"
  }
];

// 로컬 상태 관리 (LocalStorage)
const STORAGE_KEYS = {
  PINNED: "edutech_pinned_tools",
  RECENT: "edutech_recent_tools",
  THEME: "edutech_theme_preference"
};

let currentCategory = "all";
let searchQuery = "";

function getPinnedIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PINNED)) || [];
  } catch (e) {
    return [];
  }
}

function savePinnedIds(ids) {
  try {
    localStorage.setItem(STORAGE_KEYS.PINNED, JSON.stringify(ids));
  } catch (e) {}
}

function getRecentIds() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENT)) || [];
  } catch (e) {
    return [];
  }
}

function recordRecentVisit(toolId) {
  let recents = getRecentIds().filter(id => id !== toolId);
  recents.unshift(toolId);
  recents = recents.slice(0, 5); // 최대 5개
  try {
    localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recents));
  } catch (e) {}
  renderQuickAccess();
}

function togglePin(toolId, event) {
  if (event) event.stopPropagation();
  let pinned = getPinnedIds();
  if (pinned.includes(toolId)) {
    pinned = pinned.filter(id => id !== toolId);
  } else {
    pinned.push(toolId);
  }
  savePinnedIds(pinned);
  renderCards();
  renderQuickAccess();
}

// 렌더링: 퀵 액세스 바 (고정 및 최근 방문)
function renderQuickAccess() {
  const container = document.getElementById("quickAccessItems");
  if (!container) return;

  const pinnedIds = getPinnedIds();
  const recentIds = getRecentIds();

  const allRelevantIds = Array.from(new Set([...pinnedIds, ...recentIds]));
  if (allRelevantIds.length === 0) {
    container.innerHTML = '<span style="font-size: 0.8125rem; color: var(--text-muted);">자주 쓰는 도구의 핀(★)을 눌러 상단에 고정해 보세요.</span>';
    return;
  }

  let html = "";
  allRelevantIds.slice(0, 6).forEach(id => {
    const tool = TOOLS_DATA.find(t => t.id === id);
    if (!tool) return;
    const isPinned = pinnedIds.includes(id);
    html += `
      <a href="${tool.url}" class="quick-tag" onclick="recordRecentVisit('${tool.id}')" target="_blank" rel="noopener">
        <span>${isPinned ? "★" : "🕒"}</span>
        <span>${tool.icon} ${tool.name}</span>
      </a>
    `;
  });

  container.innerHTML = html;
}

// 렌더링: 16대 학습 도구 카드 그리드
function renderCards() {
  const grid = document.getElementById("toolsGrid");
  if (!grid) return;

  const pinnedIds = getPinnedIds();

  let filtered = TOOLS_DATA.filter(tool => {
    const matchesCategory = currentCategory === "all" || tool.category === currentCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      tool.name.toLowerCase().includes(query) ||
      tool.summary.toLowerCase().includes(query) ||
      tool.tags.some(tag => tag.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  // 고정(Pinned)된 도구를 최우선 정렬
  filtered.sort((a, b) => {
    const aPinned = pinnedIds.includes(a.id) ? 1 : 0;
    const bPinned = pinnedIds.includes(b.id) ? 1 : 0;
    return bPinned - aPinned;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <p>🔍 검색 조건에 일치하는 학습 도구가 없습니다.</p>
        <span style="font-size: 0.875rem;">다른 검색어를 입력하거나 카테고리 필터를 변경해 보세요.</span>
      </div>
    `;
    return;
  }

  let html = "";
  filtered.forEach(tool => {
    const isPinned = pinnedIds.includes(tool.id);
    html += `
      <article class="tool-card" id="card-${tool.id}">
        <div class="card-top">
          <div class="card-icon-box">${tool.icon}</div>
          <div class="card-badges">
            <span class="badge-age ${tool.category}">${tool.ageBadge}</span>
            <button class="pin-btn ${isPinned ? 'pinned' : ''}" onclick="togglePin('${tool.id}', event)" title="${isPinned ? '고정 해제' : '상단 고정'}">
              ${isPinned ? "★" : "☆"}
            </button>
          </div>
        </div>
        <h3 class="card-title">${tool.name}</h3>
        <p class="card-summary">${tool.summary}</p>
        <div class="card-tags">
          ${tool.tags.map(tag => `<span class="card-tag">#${tag}</span>`).join("")}
        </div>
        <a href="${tool.url}" class="card-action-btn" onclick="recordRecentVisit('${tool.id}')" target="_blank" rel="noopener">
          도구 실행하기 →
        </a>
      </article>
    `;
  });

  grid.innerHTML = html;
}

// 테마 토글 (다크/라이트)
function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEYS.THEME);
  const theme = saved || "dark";
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeButton(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, next);
  } catch (e) {}
  updateThemeButton(next);
}

function updateThemeButton(theme) {
  const btn = document.getElementById("themeToggleBtn");
  if (btn) {
    btn.innerHTML = theme === "dark" ? "☀️ 라이트모드" : "🌙 다크모드";
  }
}

// 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderCards();
  renderQuickAccess();

  // 검색 인풋
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderCards();
    });
  }

  // 카테고리 탭
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category") || "all";
      renderCards();
    });
  });

  // 테마 토글 버튼
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }

  // FAQ 아코디언
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
      const item = q.parentElement;
      item.classList.toggle("open");
    });
  });
});

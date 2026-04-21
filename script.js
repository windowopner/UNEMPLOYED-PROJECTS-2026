
// 🔥 로딩 화면 제거
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  if (loading) loading.style.display = "none";
});


// 🔍 검색 필터
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

if (search) {
  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(value) ? "block" : "none";
    });
  });
}


// 🚀 앱 뷰어 (iframe 시스템)
const viewer = document.getElementById("viewer");
const frame = document.getElementById("frame");
const title = document.getElementById("title");
const back = document.getElementById("back");

if (cards) {
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const url = card.dataset.url;

      if (!url) return;

      if (frame) frame.src = url;
      if (title) title.innerText = card.querySelector("h2")?.innerText || "Project";

      if (viewer) viewer.style.display = "flex";
    });
  });
}


// ⬅ 뒤로가기
if (back) {
  back.addEventListener("click", () => {
    viewer.style.display = "none";
    frame.src = "";
  });
}


// ❌ 바깥 클릭 닫기 (옵션 안전처리)
window.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.style.display = "none";
    frame.src = "";
  }
});

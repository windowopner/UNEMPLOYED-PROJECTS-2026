
// 🔥 DOM 안전 실행 (핵심)
document.addEventListener("DOMContentLoaded", () => {

  // 🔥 로딩 제거
  const loading = document.getElementById("loading");
  if (loading) {
    loading.style.display = "none";
  }

  // 🔍 검색
  const search = document.getElementById("search");
  const cards = document.querySelectorAll(".card");

  if (search && cards.length > 0) {
    search.addEventListener("input", () => {
      const value = search.value.toLowerCase();

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(value) ? "block" : "none";
      });
    });
  }

  // 🚀 앱 뷰어
  const viewer = document.getElementById("viewer");
  const frame = document.getElementById("frame");
  const title = document.getElementById("title");

  if (viewer && frame && title && cards.length > 0) {
    cards.forEach(card => {
      card.addEventListener("click", () => {

        const url = card.dataset.url;

        if (!url) return;

        frame.src = url;
        title.innerText = card.querySelector("h2")?.innerText || "Project";

        viewer.style.display = "flex";
      });
    });
  }

  // ⬅ 뒤로가기
  const back = document.getElementById("back");

  if (back && viewer && frame) {
    back.addEventListener("click", () => {
      viewer.style.display = "none";
      frame.src = "";
    });
  }

});

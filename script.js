
// 🔥 DOM 완전히 로드된 뒤 실행
document.addEventListener("DOMContentLoaded", () => {

  // 🔥 로딩 제거
  const loading = document.getElementById("loading");
  if (loading) loading.style.display = "none";

  // 🔍 search (안전 체크)
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

  // 🚀 viewer
  const viewer = document.getElementById("viewer");
  const frame = document.getElementById("frame");
  const title = document.getElementById("title");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const url = card.dataset.url;
      if (!url) return;

      if (frame) frame.src = url;
      if (title) title.innerText = card.querySelector("h2")?.innerText;

      if (viewer) viewer.style.display = "flex";
    });
  });

  // ⬅ 닫기
  const back = document.getElementById("back");

  if (back && viewer) {
    back.addEventListener("click", () => {
      viewer.style.display = "none";
      frame.src = "";
    });
  }

});

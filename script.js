
document.addEventListener("DOMContentLoaded", () => {

  // 로딩 제거
  const loading = document.getElementById("loading");
  if (loading) loading.style.display = "none";

  // 검색
  const search = document.getElementById("search");
  const cards = document.querySelectorAll(".card");

  if (search) {
    search.addEventListener("input", () => {
      const v = search.value.toLowerCase();

      cards.forEach(c => {
        c.style.display = c.textContent.toLowerCase().includes(v) ? "flex" : "none";
      });
    });
  }

  // 앱 실행
  const viewer = document.getElementById("viewer");
  const frame = document.getElementById("frame");
  const title = document.getElementById("title");
  const back = document.getElementById("back");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const url = card.dataset.url;
      if (!url) return;

      frame.src = url;
      title.innerText = card.querySelector("h2").innerText;

      viewer.style.display = "flex";
    });
  });

  // 뒤로가기
  if (back) {
    back.addEventListener("click", () => {
      viewer.style.display = "none";
      frame.src = "";
    });
  }

});

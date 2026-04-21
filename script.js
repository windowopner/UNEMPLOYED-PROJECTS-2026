// 🌙 다크모드
const btn = document.getElementById("toggleTheme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});


// 🔍 검색
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const name = card.getAttribute("data-name");
    card.style.display = name.includes(value) ? "block" : "none";
  });
});


// ⚡ 로딩
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
});


// 💥 모달
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.innerText = card.querySelector("h2").innerText;
    modalDesc.innerText = card.querySelector("p").innerText;
    modalLink.href = card.querySelector("a").href;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

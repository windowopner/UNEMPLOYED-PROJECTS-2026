// toggle EMO mode
const btn = document.getElementById("toggleTheme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    btn.textContent = "🌞 Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
});


// search filter
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  cards.forEach(card => {
    const name = card.getAttribute("data-name");

    if (name.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  const search = document.getElementById("search");
  const cards = Array.from(document.querySelectorAll(".card"));
  const viewer = document.getElementById("viewer");
  const frame = document.getElementById("frame");
  const title = document.getElementById("title");
  const back = document.getElementById("back");

  const hideLoading = () => {
    if (!loading) {
      return;
    }

    window.setTimeout(() => {
      loading.classList.add("is-hidden");
    }, 160);
  };

  const closeViewer = () => {
    if (!viewer || !frame) {
      return;
    }

    viewer.classList.remove("is-visible");
    viewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("viewer-open");
    frame.src = "about:blank";
  };

  const openViewer = (card) => {
    if (!viewer || !frame || !title) {
      return;
    }

    const url = card.dataset.url;

    if (!url) {
      return;
    }

    const separator = url.includes("?") ? "&" : "?";
    frame.src = `${url}${separator}v=${Date.now()}`;
    title.textContent =
      card.querySelector(".card-title")?.textContent || "Project";

    viewer.classList.add("is-visible");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("viewer-open");
  };

  if (search) {
    search.addEventListener("input", () => {
      const value = search.value.trim().toLowerCase();

      cards.forEach((card) => {
        const haystack = `${card.textContent} ${card.dataset.search || ""}`.toLowerCase();
        card.hidden = value ? !haystack.includes(value) : false;
      });
    });
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => openViewer(card));
  });

  if (back) {
    back.addEventListener("click", closeViewer);
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && viewer?.classList.contains("is-visible")) {
      closeViewer();
    }
  });

  hideLoading();
});

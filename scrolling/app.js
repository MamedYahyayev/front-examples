document.addEventListener("scroll", () => {
  handleUpElementVisibility();
  handleScrollToTop();
});

const up = document.getElementById("up");

function handleUpElementVisibility() {
  if (window.scrollY > 1200) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
}

function handleScrollToTop() {
  up.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

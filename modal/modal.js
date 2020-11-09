const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const body = document.querySelector("body");

backDrop.addEventListener("click", () => {
  modal.classList.add("close");
  backDrop.style.display = "none";
});

function backdropClickHandler() {
  backdrop.style.display = "none";
  sideDrawer.classList.remove("open");
}

const changeTheme = document.querySelector(".colorChange");
const priceCard = document.querySelector(".price__card");
const theme = document.querySelector(".theme");
const button = document.querySelector(".price__card-footer");
const features = document.querySelector(".price__card-features");

changeTheme.addEventListener("click", () => {
  if (theme.innerHTML === "Light") {
    theme.innerHTML = "Dark";
    priceCard.classList.add("dark");
    button.classList.add("dark");
  } else {
    theme.innerHTML = "Light";
    priceCard.classList.remove("dark");
    button.classList.remove("dark");
  }
});

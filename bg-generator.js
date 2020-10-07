const css = document.querySelector("h3")
const inputColor1 = document.querySelector("#color1");
const inputColor2 = document.querySelector("#color2");
const body = document.querySelector("body");

function setBackgroundColor() {
  body.style.background =
    "linear-gradient(to right," +
    inputColor1.value +
    "," +
    inputColor2.value +
    ")";

    css.textContent = body.style.background + ";"
}

inputColor1.addEventListener("input", setBackgroundColor);

inputColor2.addEventListener("input", setBackgroundColor);

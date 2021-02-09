// dom elements
const storeCookieBtn = document.getElementById("store-btn-cookie");
const retrieveCookieBtn = document.getElementById("retrieve-btn-cookie");

// events
const user = {
  name: "Samir",
  surname: "Samirov",
  favColor: ["Red", "Green", "Yellow"],
};

storeCookieBtn.addEventListener("click", () => {
  const jsonData = JSON.stringify(user);
  document.cookie = `user=${jsonData}`;
  console.log("Data stored on the cookie");
});

retrieveCookieBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split("=");
  console.log(JSON.parse(cookieData[1]));
});
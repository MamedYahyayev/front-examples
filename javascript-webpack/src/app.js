// imports
import { User } from "./Users/User.js";
import { Users } from "./Users/Users.js";

// dom elements
const userArea = document.getElementById("user-area");
const addUserBtn = document.getElementById("add-user-btn");
const fetchUserBtn = document.getElementById("fetch-users-btn");

const users = new Users();

// get data from form
addUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userForm = document.getElementById("user-form");

  let name = userForm.querySelector("#name");
  let surname = userForm.querySelector("#surname");
  let age = userForm.querySelector("#age");

  const user = new User(name.value, surname.value, age.value);
  user.addUser(users.usersArray);
  name.value = "";
  surname.value = "";
  age.value = "";
});

fetchUserBtn.addEventListener("click", fetchUsers);

// fetch users
function fetchUsers() {
  console.log(users.usersArray);
  userArea.innerHTML = "";
  for (const user of users.usersArray) {
    const userEl = document.createElement("li");
    userEl.className = "users";
    userEl.textContent = user.name + " " + user.surname + " " + user.age;
    userArea.appendChild(userEl);
  }
}

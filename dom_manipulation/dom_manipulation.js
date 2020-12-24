const body = document.body;

// append
body.append("Hello World");

// appendChild , createElement , innerHTML , innerText , textContent
const div = document.createElement("div");
div.innerHTML = `<h1>Hello sadas</h1>`;
div.innerText = "Hello My Brother";
div.textContent = "Hello My Brother 2";
body.appendChild(div);

const spanDiv = document.querySelector(".span-div");
console.log(spanDiv.textContent); // this returns texts with spaces and indentation
console.log(spanDiv.innerText); // this returns just texts

const spanDiv2 = document.querySelector(".span-div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// remove
spanBye.remove();

// removeChild
spanDiv2.removeChild(spanHi);

// getAttribute
console.log(spanHi.getAttribute("title"));

// setAttribute
spanHi.setAttribute("id", "newId");

//removeAttribute
spanHi.removeAttribute("title");

// dataset
console.log(spanBye.dataset);
console.log(spanBye.dataset.test);

// set data
spanBye.dataset.newTitle = "I am new title";

// classList
// add class
spanBye.classList.add("newClass");

// remove class
spanBye.classList.remove("newClass");

// toggle class
spanBye.classList.toggle("newClass");

// toggle class with second boolean value
spanBye.classList.toggle("newClass", true); // this will automaticaly add newClass
spanBye.classList.toggle("newClass", false); // this will automaticaly remove newClass

// style
spanHi.style.color = "red";
body.style.background = "green";

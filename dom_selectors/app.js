/*
    1. getElementById
    2. getElementByTagName
    3. getElementByClassName
    4. getElementByName
    5. querySelector
    6. querySelectorAll
    7. children
    8. parentElement
    9. closest
    10. nextElementSibling
    11. previousElementSibling
*/

// GetElementById
const header = document.getElementById("header");
console.log(header);

// GetElementByTagName
const h1 = document.getElementsByTagName("h1");
console.log(h1);

// GetElementByClassName
const li = document.getElementsByClassName("list-items");
console.log(li);

// GetElementByName
const p = document.getElementsByName("article");
console.log(p);

console.log("------------------------------------------");

// QuerySelector
const headerQS = document.querySelector("#header");
console.log(headerQS);

const h1QS = document.querySelector("h1");
console.log(h1QS);

const pQS = document.querySelector("[name=article]");
console.log(pQS);

// QuerySelectorAll
const liQSA = document.querySelectorAll(".list-items");
console.log(liQSA);

console.log("------------------------------------------");

// Children
const ul = document.querySelector("#list");
const listItems = ul.children;
console.log("Children ->" , listItems);

// Specific Child
console.log("Specific Child ->", listItems[2]);

// ParentElement
const h1ParentElement = document.querySelector("h1");
const headerParent = h1ParentElement.parentElement;
console.log("ParentElement ->", headerParent);

// Closest
const pClosest = document.querySelector("[name=article]");
const h1Closest = pClosest.closest("header");
console.log("Closest ->", h1Closest);

// NextElementSibling
const liItems = document.querySelector(".list-items");
const secondLi = liItems.nextElementSibling;
console.log("Next Element Sibling ->", secondLi);

// PreviousElementSibling
const thirdLi = document.querySelectorAll(".list-items")[2];
const previousLi = thirdLi.previousElementSibling;
console.log("Previous Element Sibling -> ", previousLi);

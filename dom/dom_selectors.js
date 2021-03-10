// Get Elements By Tag name
var div = document.getElementsByTagName("div");
console.log(div);

var h1 = document.getElementsByTagName("h1");
console.log(h1);

var p = document.getElementsByTagName("p");
console.log(p);

// Get Elements By ClassName
var h1_tag = document.getElementsByClassName("h1-tag");
console.log(h1_tag);

var p_tag = document.getElementsByClassName("p-tag");
console.log(p_tag);

var p_tag_class = document.getElementsByClassName("p-tag")[1];
console.log(p_tag_class);

var li_tag = document.getElementsByClassName("li-tags");
console.log(li_tag);

// Get Elements By Id
var id_h1 = document.getElementById("h1-tag-id");
console.log(id_h1);

var id_p = document.getElementById("p-tag-id");
console.log(id_p);

var id_li = document.getElementById("li-tags-id");
console.log(id_li);

// Query Selector
var qs_h1 = document.querySelector("h1");
console.log(qs_h1);

var qs_p = document.querySelector("p");
console.log(qs_p);

// Query Selector All
var qs_all = document.querySelectorAll("h1");
console.log(qs_all);

var qs_p_all = document.querySelectorAll("p");
console.log(qs_p_all);

// GetAtrribute
var p_get = document.getElementById("p-tag-id").getAttribute("hello");
console.log(p_get);

var p_tag_setElement = document
  .getElementById("p-tag-id")
  .setAttribute("hello", "Salam Dunya");
console.log(document.getElementById("p-tag-id"));
console.log(document.getElementById("p-tag-id").hello);

// Changing Styles
// var style_h1 = document.querySelector("h1").style.background = "red"
// var style_h1_className = document.querySelector("h1").className = "h1-tag-style"

// style_h1_className = document.querySelector("h1").className = "h1-tag-style-second"

// var classListItems = ["h1-tag-style", "h1-tag-style-second"];

var style_h1_className = document
  .querySelector("h1")
  .classList.add("h1-tag-style");

style_h1_className = document
  .querySelector("h1")
  .classList.add("h1-tag-style-second");

  style_h1_className = document
  .querySelector("h1")
  .classList.remove("h1-tag-style-second");

  style_h1_className = document
  .querySelector("h1")
  .classList.remove("h1-tag-style");


  style_h1_className = document
  .querySelector("h1")
  .classList.add("h1-tag-style-second");


  style_h1_className = document
  .querySelector("h1")
  .classList.toggle("h1-tag-style-second");


  // Parent 
  var parent_li = document.querySelectorAll("li")[0];
  console.log(parent_li.parentElement)

  // Children
  console.log(parent_li.children) 

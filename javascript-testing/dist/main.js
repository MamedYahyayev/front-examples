/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { createElement, checkAndGenerate } = __webpack_require__(/*! ./util */ \"./util.js\");\n\nconst initApp = () => {\n  // Initializes the app, registers the button click listener\n  const newUserButton = document.querySelector(\"#btnAddUser\");\n  newUserButton.addEventListener(\"click\", addUser);\n};\n\nconst addUser = () => {\n  // Fetches the user input, creates a new HTML element based on it\n  // and appends the element to the DOM\n  const newUserNameInput = document.querySelector(\"input#name\");\n  const newUserAgeInput = document.querySelector(\"input#age\");\n\n  const outputText = checkAndGenerate(\n    newUserNameInput.value,\n    newUserAgeInput.value\n  );\n\n  if(!outputText){\n    return;\n  }\n\n  const userList = document.querySelector(\".user-list\");\n\n  const element = createElement(\"li\", outputText, \"user-item\");\n  userList.appendChild(element);\n};\n\n// Start the app!\ninitApp();\n\n\n//# sourceURL=webpack://javascript-testing/./app.js?");

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, exports) {

eval("const generateText = (name, age) => {\n  // Returns output text\n  return `${name} (${age} years old)`;\n};\n\nexports.createElement = (type, text, className) => {\n  // Creates a new HTML element and returns it\n  const newElement = document.createElement(type);\n  newElement.classList.add(className);\n  newElement.textContent = text;\n  return newElement;\n};\n\nconst validateInput = (text, notEmpty, isNumber) => {\n  // Validate user input with two pre-defined rules\n  if (!text) {\n    return false;\n  }\n  if (notEmpty && text.trim().length === 0) {\n    return false;\n  }\n  if (isNumber && isNaN(+text)) {\n    return false;\n  }\n  return true;\n};\n\nexports.checkAndGenerate = (name, age) => {\n  if (!validateInput(name, true, false) || !validateInput(age, false, true)) {\n    return false;\n  }\n\n  return this.generateText(name, age);\n};\n\nexports.generateText = generateText;\nexports.validateInput = validateInput;\n\n\n//# sourceURL=webpack://javascript-testing/./util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;
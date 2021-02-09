/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Users/User.js":
/*!***************************!*\
  !*** ./src/Users/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\r\n  constructor(name, surname, age) {\r\n    this.name = name;\r\n    this.surname = surname;\r\n    this.age = age;\r\n    this.info;\r\n  }\r\n\r\n  info() {\r\n    console.log(\"User: \", this.name + \" \" + this.surname + \" \" + this.age);\r\n  }\r\n\r\n  // add user to users array\r\n  addUser(users) {\r\n    this.info();\r\n    users.push(this);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-webpack/./src/Users/User.js?");

/***/ }),

/***/ "./src/Users/Users.js":
/*!****************************!*\
  !*** ./src/Users/Users.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Users\": () => (/* binding */ Users)\n/* harmony export */ });\nclass Users {\r\n  constructor() {\r\n    this.usersArray = [];\r\n  }\r\n\r\n  showInfo() {\r\n    console.log(this.usersArray);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-webpack/./src/Users/Users.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users/User.js */ \"./src/Users/User.js\");\n/* harmony import */ var _Users_Users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users/Users.js */ \"./src/Users/Users.js\");\n// imports\r\n\r\n\r\n\r\n// dom elements\r\nconst userArea = document.getElementById(\"user-area\");\r\nconst addUserBtn = document.getElementById(\"add-user-btn\");\r\nconst fetchUserBtn = document.getElementById(\"fetch-users-btn\");\r\n\r\nconst users = new _Users_Users_js__WEBPACK_IMPORTED_MODULE_1__.Users();\r\n\r\n// get data from form\r\naddUserBtn.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  const userForm = document.getElementById(\"user-form\");\r\n\r\n  let name = userForm.querySelector(\"#name\");\r\n  let surname = userForm.querySelector(\"#surname\");\r\n  let age = userForm.querySelector(\"#age\");\r\n\r\n  const user = new _Users_User_js__WEBPACK_IMPORTED_MODULE_0__.User(name.value, surname.value, age.value);\r\n  user.addUser(users.usersArray);\r\n  name.value = \"\";\r\n  surname.value = \"\";\r\n  age.value = \"\";\r\n});\r\n\r\nfetchUserBtn.addEventListener(\"click\", fetchUsers);\r\n\r\n// fetch users\r\nfunction fetchUsers() {\r\n  console.log(users.usersArray);\r\n  userArea.innerHTML = \"\";\r\n  for (const user of users.usersArray) {\r\n    const userEl = document.createElement(\"li\");\r\n    userEl.className = \"users\";\r\n    userEl.textContent = user.name + \" \" + user.surname + \" \" + user.age;\r\n    userArea.appendChild(userEl);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-webpack/./src/app.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkjs_eslint_webpack"] = self["webpackChunkjs_eslint_webpack"] || []).push([["src_App_Tooltip_js"],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doSomething\": () => (/* binding */ doSomething),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction doSomething() {\n  console.log(\"Empty Function\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElement = document.getElementById(hostElementId);\n    } else {\n      this.hostElement = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  detach() {\n    if (this.element) {\n      this.element.remove();\n      // this.element.parentElement.removeChild(this.element);\n    }\n  }\n\n  attach() {\n    this.hostElement.insertAdjacentElement(\n      this.insertBefore ? \"afterbegin\" : \"beforeend\",\n      this.element\n    );\n  }\n});\n\n\n//# sourceURL=webpack://js-eslint-webpack/./src/App/Component.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tooltip\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/App/Component.js\");\n\n\nconsole.log(\"Tooltip running\");\n\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(closeNotifierFunction, text, hostElementId) {\n    super(hostElementId);\n    this.closeNotifier = closeNotifierFunction;\n    this.text = text;\n    this.closeTooltip = () => {\n      this.detach();\n      this.closeNotifier();\n    };\n    this.create();\n  }\n\n  create() {\n    const tooltipElement = document.createElement(\"div\");\n    tooltipElement.className = \"card\";\n    const tooltipTemplate = document.getElementById(\"tooltip\");\n    const tooltipBody = document.importNode(tooltipTemplate.content, true);\n    tooltipBody.querySelector(\"p\").textContent = this.text;\n    tooltipElement.append(tooltipBody);\n\n    const hostElPosLeft = this.hostElement.offsetLeft;\n    const hostElPosTop = this.hostElement.offsetTop;\n    const hostElHeight = this.hostElement.clientHeight;\n    const parentElementScrolling = this.hostElement.parentElement.scrollTop;\n\n    const x = hostElPosLeft + 20;\n    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\n\n    tooltipElement.style.position = \"absolute\";\n    tooltipElement.style.left = `${x}px`; // 500px\n    tooltipElement.style.top = `${y}px`;\n\n    tooltipElement.addEventListener(\"click\", this.closeTooltip);\n    this.element = tooltipElement;\n  }\n}\n\n\n//# sourceURL=webpack://js-eslint-webpack/./src/App/Tooltip.js?");

/***/ })

}]);
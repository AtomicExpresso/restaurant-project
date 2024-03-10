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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n\r\n\r\n\r\nconst homeBtn = document.querySelector('#homebtn');\r\nconst menuBtn = document.querySelector('#menubtn');\r\nconst content = document.querySelector('#content');\r\n\r\nfunction pageClear(){\r\n  content.innerHTML = ''\r\n}\r\n\r\nfunction mainPage(){\r\n  pageClear();\r\n  (0,_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\nfunction secondPage(){\r\n  pageClear();\r\n  (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\nhomeBtn.addEventListener('click', function() {\r\n  mainPage();\r\n});\r\n\r\n\r\nmenuBtn.addEventListener('click', function() {\r\n  secondPage();\r\n});\r\n\r\nmainPage();\r\n\r\nconsole.log('1212')\n\n//# sourceURL=webpack://restaurant_website_project/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction main(){\r\n  //hero section\r\n  const content = document.querySelector('#content')\r\n  const heroDiv = document.createElement('div');\r\n  let heroHeading = document.createElement('h1');\r\n  let heroPara = document.createElement('p');\r\n  const button = document.createElement('button');\r\n\r\n  heroDiv.setAttribute(\"id\", \"main\");\r\n  heroHeading.innerText = 'Tony\\'s Pizza';\r\n  heroPara.innerText = 'Fresh baked pizza';\r\n  button.textContent = 'View Menu';\r\n\r\n  //About section\r\n  const aboutDiv = document.createElement('div');\r\n  const aboutTextDiv = document.createElement('div');\r\n  const aboutSubText = document.createElement('h4');\r\n  const aboutHeading = document.createElement('h1');\r\n  const aboutPara = document.createElement('p');\r\n  const aboutImg = document.createElement('img');\r\n\r\n  aboutDiv.setAttribute(\"id\", \"about\");\r\n  aboutTextDiv.setAttribute(\"id\", \"abouttext\");\r\n  aboutHeading.innerText = 'What makes our pizza great'\r\n  aboutPara.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';\r\n  aboutImg.src = '/images/about-img.png';\r\n  aboutSubText.innerText = 'Traditional';\r\n\r\n  heroDiv.appendChild(heroHeading);\r\n  heroDiv.appendChild(heroPara);\r\n  heroDiv.appendChild(button);\r\n\r\n  aboutTextDiv.appendChild(aboutSubText);\r\n  aboutTextDiv.appendChild(aboutHeading);\r\n  aboutTextDiv.appendChild(aboutPara);\r\n  aboutDiv.appendChild(aboutTextDiv);\r\n  aboutDiv.appendChild(aboutImg);\r\n\r\n  content.appendChild(heroDiv);\r\n  content.appendChild(aboutDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\r\n\n\n//# sourceURL=webpack://restaurant_website_project/./src/main.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction menuPage() {\r\n  const content = document.querySelector('#content');\r\n  const menuDiv = document.createElement('div');\r\n  const menuHeader = document.createElement('h1');\r\n\r\n  menuDiv.setAttribute(\"id\", \"menu\");\r\n  menuHeader.innerText = 'Our Menu';\r\n\r\n  menuDiv.appendChild(menuHeader);\r\n  content.appendChild(menuDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant_website_project/./src/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactPage() {\r\n  const content = document.querySelector('#content');\r\n  const contactHeader = document.createElement('h1');\r\n  const contactDiv = document.createElement('div');\r\n  \r\n  contactDiv.setAttribute(\"id\", \"contactdiv\");\r\n\r\n  contactHeader.innerText = 'Contact us'\r\n\r\n  contactDiv.append(contactHeader)\r\n  content.appendChild(contactDiv)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant_website_project/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n\r\n\r\n\r\n\r\n//navbar\r\nconst homeBtn = document.querySelector('#homebtn');\r\nconst menuBtn = document.querySelector('#menubtn');\r\nconst contactBtn = document.querySelector('#contactbtn');\r\nconst content = document.querySelector('#content');\r\n\r\n//===Pages===\r\nfunction pageClear(){ //reset page\r\n  content.innerHTML = ''\r\n}\r\n\r\nfunction mainPage(){ //home page\r\n  pageClear();\r\n  (0,_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\nfunction secondPage(){ //menu page\r\n  pageClear();\r\n  (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\n\r\nfunction thirdPage() { //contact page\r\n  pageClear();\r\n  (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n}\r\n\r\nhomeBtn.addEventListener('click', function() {\r\n  mainPage();\r\n});\r\n\r\nmenuBtn.addEventListener('click', function() {\r\n  secondPage();\r\n});\r\n\r\ncontactBtn.addEventListener('click', function() {\r\n  thirdPage();\r\n});\r\n\r\n\r\nmainPage();\r\n\r\nconsole.log('1212')\n\n//# sourceURL=webpack://restaurant_website_project/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction main(){\r\n  //hero section\r\n  const content = document.querySelector('#content')\r\n  const heroDiv = document.createElement('div');\r\n  let heroHeading = document.createElement('h1');\r\n  let heroPara = document.createElement('p');\r\n  const button = document.createElement('button');\r\n\r\n  heroDiv.setAttribute(\"id\", \"main\");\r\n  heroHeading.innerText = 'Tony\\'s Pizza';\r\n  heroPara.innerText = 'Fresh baked pizza';\r\n  button.textContent = 'View Menu';\r\n\r\n  //About section\r\n  const aboutDiv = document.createElement('div');\r\n  const aboutTextDiv = document.createElement('div');\r\n  const aboutSubText = document.createElement('h4');\r\n  const aboutHeading = document.createElement('h1');\r\n  const aboutPara = document.createElement('p');\r\n  const aboutImg = document.createElement('img');\r\n\r\n  aboutDiv.setAttribute(\"id\", \"about\");\r\n  aboutTextDiv.setAttribute(\"id\", \"abouttext\");\r\n  aboutHeading.innerText = 'What makes our pizza great'\r\n  aboutPara.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';\r\n  aboutImg.src = '/images/about-img.png';\r\n  aboutSubText.innerText = 'Traditional';\r\n\r\n  heroDiv.appendChild(heroHeading);\r\n  heroDiv.appendChild(heroPara);\r\n  heroDiv.appendChild(button);\r\n\r\n  aboutTextDiv.appendChild(aboutSubText);\r\n  aboutTextDiv.appendChild(aboutHeading);\r\n  aboutTextDiv.appendChild(aboutPara);\r\n  aboutDiv.appendChild(aboutTextDiv);\r\n  aboutDiv.appendChild(aboutImg);\r\n\r\n  content.appendChild(heroDiv);\r\n  content.appendChild(aboutDiv);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\r\n\n\n//# sourceURL=webpack://restaurant_website_project/./src/main.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPage() {\r\n  const content = document.querySelector('#content');\r\n  const menuDiv = document.createElement('div');\r\n  const menuHeader = document.createElement('h1');\r\n  const imgContainer = document.createElement('div');\r\n\r\n  const imgOnePara = document.createElement('p');\r\n  const imgTwoPara = document.createElement('p');\r\n  const imgThreePara = document.createElement('p');\r\n\r\n  const imgOneBtn = document.createElement('button');\r\n  const imgTwoBtn = document.createElement('button');\r\n  const imgThreeBtn = document.createElement('button');\r\n\r\n  imgContainer.setAttribute(\"id\", \"imgcontainer\");\r\n  const imgOne = document.createElement('img');\r\n  const imgTwo = document.createElement('img');\r\n  const imgThree = document.createElement('img');\r\n  const imgOneContainer = document.createElement('div');\r\n  const imgTwoContainer = document.createElement('div');\r\n  const imgThreeContainer = document.createElement('div');\r\n\r\n  imgOne.src = '/images/menu-items/wings.png';\r\n  imgTwo.src = '/images/menu-items/pasta.png';\r\n  imgThree.src = '/images/menu-items/salad.png';\r\n\r\n  menuDiv.setAttribute(\"id\", \"menu\");\r\n  menuHeader.innerText = 'Our Menu';\r\n\r\n  imgOnePara.innerText = 'BBQ Wings\\n $5.99';\r\n  imgTwoPara.innerText = 'Pasta\\n $10.50';\r\n  imgThreePara.innerText = 'Ceaser Saled\\n $4.00';\r\n  imgOneBtn.innerText = 'Add to cart';\r\n  imgTwoBtn.innerText = 'Add to cart';\r\n  imgThreeBtn.innerText = 'Add to cart';\r\n\r\n  imgOneContainer.append(imgOne, imgOnePara, imgOneBtn);\r\n  imgTwoContainer.append(imgTwo, imgTwoPara, imgTwoBtn);\r\n  imgThreeContainer.append(imgThree, imgThreePara, imgThreeBtn);\r\n  imgContainer.append(imgOneContainer, imgTwoContainer, imgThreeContainer);\r\n  menuDiv.appendChild(menuHeader);\r\n  menuDiv.appendChild(imgContainer);\r\n  content.appendChild(menuDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant_website_project/./src/menuPage.js?");

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
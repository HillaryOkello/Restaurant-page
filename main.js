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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n  const tabContent = document.querySelector('.tab-content');\n  const about = document.createElement('div');\n  about.classList.add('container');\n  const aboutText = document.createElement('div');\n  aboutText.textContent = 'Hilnex restaurant is a fancy modern restaurant located in Kampala. We offer a variety of great dishes both local and international';\n  about.appendChild(aboutText);\n  tabContent.appendChild(about);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/assets/banner2.jpeg":
/*!*********************************!*\
  !*** ./src/assets/banner2.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4a4e788050db865cf38f.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/banner2.jpeg?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n  const tabContent = document.querySelector('.tab-content');\n  const social = document.createElement('div');\n  social.classList.add('ml-5', 'pl-5');\n  const text = document.createElement('p');\n  text.textContent = 'Connect with us on:';\n  const details = document.createElement('div');\n  details.classList.add('d-flex', 'justify-content-center');\n  const twitter = document.createElement('div');\n  twitter.classList.add('p-2');\n  twitter.innerHTML = '<i class=\"fab fa-twitter\"></i>';\n  const facebook = document.createElement('div');\n  facebook.classList.add('p-2');\n  facebook.innerHTML = '<i class=\"fab fa-facebook-square\"></i>';\n  const instagram = document.createElement('div');\n  instagram.classList.add('p-2');\n  instagram.innerHTML = '<i class=\"fab fa-instagram\"></i>';\n  social.appendChild(text);\n  social.appendChild(details);\n  details.appendChild(twitter);\n  details.appendChild(facebook);\n  details.appendChild(instagram);\n  tabContent.appendChild(social);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navbar\": () => (/* binding */ navbar),\n/* harmony export */   \"pageContent\": () => (/* binding */ pageContent),\n/* harmony export */   \"toggleTabs\": () => (/* binding */ toggleTabs),\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\n/* harmony import */ var _assets_banner2_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/banner2.jpeg */ \"./src/assets/banner2.jpeg\");\n\n\nconst content = document.querySelector('#content');\n\nconst navbar = () => {\n  const nav = document.createElement('nav');\n  nav.classList.add('navbar', 'bg-primary');\n  const logo = document.createElement('h1');\n  logo.textContent = 'Hilnex Restaurant';\n  logo.classList.add('text-white', 'header');\n  nav.appendChild(logo);\n  content.appendChild(nav);\n};\n\nconst pageContent = () => {\n  const intro = document.createElement('div');\n  intro.classList.add('container', 'mt-5', 'p-5');\n  const intro_text = document.createElement('h2');\n  intro_text.textContent = 'Welcome to Hilnex Restaurant';\n  intro_text.classList.add('text-center', 'text-white')\n  const welcome_text = document.createElement('p');\n  welcome_text.textContent = 'We provide you with the best dishes in town. We have a variety of dishes both local and international. We ensure quality in our dishes prepared by highly trained chefs';\n  welcome_text.classList.add('text-center', 'p-2', 'pb-5', 'text-white');\n  intro.style.background = `url(${_assets_banner2_jpeg__WEBPACK_IMPORTED_MODULE_0__})`;\n  intro.style.backgroundRepeat = 'no-repeat';\n  intro.style.backgroundSize = 'cover';\n  intro.style.backgroundPosition = 'bottom';\n  intro.appendChild(intro_text);\n  intro.appendChild(welcome_text);\n  content.appendChild(intro);\n};\n\nconst toggleTabs = () => {\n  const tabs = document.createElement('div');\n  tabs.classList.add('nav', 'nav-tabs', 'm-5', 'container');\n  const about = document.createElement('h4');\n  about.classList.add('nav-link', 'tab-pane', 'show', 'active');\n  about.textContent = 'About';\n  const menu = document.createElement('h4');\n  menu.classList.add('nav-link', 'tab-pane');\n  menu.textContent = 'Menu';\n  const contact = document.createElement('h4');\n  contact.classList.add('nav-link', 'tab-pane');\n  contact.textContent = 'Contact';\n  const tabContent = document.createElement('div');\n  tabContent.classList.add('tab-content', 'd-flex');\n  tabs.appendChild(about);\n  tabs.appendChild(menu);\n  tabs.appendChild(contact);\n  content.appendChild(tabs);\n  content.appendChild(tabContent);\n};\n\nconst footer = () => {\n  const foot = document.createElement('div');\n  foot.classList.add('p-3', 'bg-primary', 'mt-5', 'mb-0');\n  const footText = document.createElement('p');\n  footText.classList.add('text-center')\n  footText.textContent = 'Made by Hillary Okello';\n  foot.appendChild(footText);\n  content.appendChild(foot);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n_home__WEBPACK_IMPORTED_MODULE_0__.navbar()\n_home__WEBPACK_IMPORTED_MODULE_0__.pageContent()\n_home__WEBPACK_IMPORTED_MODULE_0__.toggleTabs()\n_home__WEBPACK_IMPORTED_MODULE_0__.footer()\n;(0,_about__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nconst tabContent = document.querySelector('.tab-content');\nconst tabItem = document.querySelectorAll('.nav-link');\nconst tabDetails = [_about__WEBPACK_IMPORTED_MODULE_1__.default, _menu__WEBPACK_IMPORTED_MODULE_2__.default,  _contact__WEBPACK_IMPORTED_MODULE_3__.default];\nconst selectItem = (index) => {\n  tabContent.innerHTML = '';\n  tabItem.forEach((item) => {\n    item.classList.remove('show', 'active');\n  });\n\n  tabItem[index].classList.add('show', 'active');\n  tabDetails[index]();\n};\n\nfor (let i = 0; i < tabItem.length; i += 1) {\n  tabItem[i].onclick = selectItem.bind(null, i);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuList = (text) => ({ text });\n\nconst list1 = menuList('Fish.....................USH. 15,000');\nconst list2 = menuList('Chicken Soup..............USH. 10,000');\nconst list3 = menuList('Taandori chicken wrap..... USH. 25,000');\nconst list4 = menuList('Chicken  Pizza.............USH. 28,000');\nconst list5 = menuList('Granola bars.........USH. 15,000');\nconst list6 = menuList('Caviar.....USH. 40,000');\n\nconst menuTab = document.createElement('div');\nmenuTab.classList.add('d-flex', 'container');\nconst wrap = document.createElement('div');\nconst wrapper = [list1.text, list2.text, list3.text, list4.text, list5.text, list6.text];\n\nwrapper.forEach((item) => {\n  const wrapAll = document.createElement('div');\n  wrapAll.innerHTML = item;\n  wrap.appendChild(wrapAll);\n});\n\nconst menu = () => {\n  const tabContent = document.querySelector('.tab-content');\n  menuTab.appendChild(wrap);\n  tabContent.appendChild(menuTab);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
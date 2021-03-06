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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clock\": () => (/* binding */ clock)\n/* harmony export */ });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nconst clockEl = document.getElementById(\"clock\");\n\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    const currentTime = new Date();\n\n    // 2. Store the hour, minute, and second.\n    this.hours = currentTime.getHours();\n    this.minutes = currentTime.getMinutes();\n    this.seconds = currentTime.getSeconds();\n\n    // 3. Call printTime.\n    this.printTime();\n\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n\n  printTime() {\n    // Format the time in HH:MM:SS\n    const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n    // Use console.log to print it.\n    // console.log(timeString);\n    (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(timeString, clockEl);\n  }\n\n  _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n  }\n\n  _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.seconds = 0;\n      this._incrementMinutes();\n    }\n  }\n\n  _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n      this.minutes = 0;\n      this._incrementHours();\n    }\n  }\n\n  _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n  }\n}\n\nconst clockElement = document.getElementById(\"clock\");\nconst clock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropdown\": () => (/* binding */ dropdown)\n/* harmony export */ });\nconst dogNav = document.querySelector(\".drop-down-dog-nav\");\nconst dropdownList = document.querySelector(\".drop-down-dog-list\");\nconst dogLinkElements = document.getElementsByClassName(\"dog-link\");\n\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\n\nconst dogLinkCreator = function () {\n  const dogLinks = [];\n  for (const item in dogs) {\n    const a = document.createElement(\"a\");\n    a.innerHTML = item;\n    a.href = dogs[item];\n    const li = document.createElement(\"li\");\n    li.className = \"dog-link\";\n    li.appendChild(a);\n    dogLinks.push(li);\n  };\n  return dogLinks;\n}\n\n\nconst attachDogLinks = function () {\n  const dogLinks = dogLinkCreator();\n  dogLinks.forEach ( li => {\n    dropdownList.appendChild(li);\n  });\n  handleLeave();\n}\n\n\nconst handleEnter = function () {\n  for (let i = 0; i < dogLinkElements.length; i++){\n    let htmlEle = dogLinkElements[i];\n    htmlEle.style.display = \"block\";\n  }\n}\n\n\nconst handleLeave = function () {\n  for (let i = 0; i < dogLinkElements.length; i++) {\n    let htmlEle = dogLinkElements[i];\n    htmlEle.style.display = \"none\";\n  }\n};\n\n\n\ndogNav.addEventListener(\"mouseenter\", handleEnter);\ndropdownList.addEventListener(\"mouseleave\", handleLeave);\n\n\nconst dropdown = attachDogLinks();\n\n\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todo\": () => (/* binding */ todo)\n/* harmony export */ });\nconst lsToDos = JSON.parse(localStorage.getItem('todos')) || [];\n\nconst ul = document.querySelector(\".todos\");\nconst form = document.querySelector(\".add-todo-form\");\nconst checkBox = document.querySelectorAll(\"input[type='checkbox']\");\n\n\nconst addTodo = (e) => {\n  e.preventDefault();\n  const input = document.querySelector(\"input[name='add-todo']\");\n  const value = input.value;\n  const todo = {\"value\": value, done: false };\n  lsToDos.push(todo);\n  localStorage.setItem(\"todos\", JSON.stringify(lsToDos));\n  populateList();\n  form.reset();\n}\n\nconst populateList = () => {\n\n    if (ul.childNodes.length < 4) {\n        console.log(\"populating\")\n        lsToDos.forEach((list, idx) => {\n            const li = document.createElement(\"li\");\n            const label = document.createElement(\"label\");\n            label.innerText = list.value;\n            const labelCheckbox = document.createElement(\"input\");\n            labelCheckbox.setAttribute(\"type\", \"checkbox\");\n            labelCheckbox.dataset.id = list.value;\n            labelCheckbox.checked = list.done;\n            labelCheckbox.innerText = \"Done?\"\n            li.appendChild(label);\n            li.appendChild(labelCheckbox);\n            \n            ul.appendChild(li);\n        });\n    } else {\n        const newItem = lsToDos[lsToDos.length - 1];\n        const li = document.createElement(\"li\");\n        \n        const label = document.createElement(\"label\");\n        label.innerText = newItem.value;\n        const labelCheckbox = document.createElement(\"input\");\n        labelCheckbox.setAttribute(\"type\", \"checkbox\");\n        labelCheckbox.checked = newItem.done;\n        labelCheckbox.innerText = \"Done?\"\n        \n        li.appendChild(label);\n        li.appendChild(labelCheckbox);\n\n        ul.appendChild(li);\n    }\n\n\n}\n\nform.addEventListener(\"submit\", addTodo);\n\ncheckBox.forEach ( checkBoxEl => {\n    checkBoxEl.addEventListener(\"click\", (e) => {\n        const checkId = e.target.dataset.id\n        console.log(e.target);\n    })\n});\n\n\npopulateList();\n\nconst todo = addTodo()\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n  // string converted into <p> tag\n  const p = document.createElement(\"p\");\n  p.innerText = string;\n  // append to input html element\n  \n  if (htmlElement.hasChildNodes()) {\n    htmlElement.removeChild(htmlElement.firstChild);\n  }\n  \n  htmlElement.appendChild(p);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

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
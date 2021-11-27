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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Dom = {\n  photosList: document.querySelector('.photos'),\n  img: document.querySelectorAll('.clickable'),\n  wrapper: document.querySelector('.mainWrapper'),\n  loader: document.getElementById('loader')\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);\n\n//# sourceURL=webpack://packege-name/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _pagination_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination.js */ \"./src/pagination.js\");\n\n\n\n\n\n\n\n // document.addEventListener('click',show)\n\n//# sourceURL=webpack://packege-name/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"state\": () => (/* binding */ state),\n/* harmony export */   \"getPhotos\": () => (/* binding */ getPhotos),\n/* harmony export */   \"closeShowedImage\": () => (/* binding */ closeShowedImage),\n/* harmony export */   \"show\": () => (/* binding */ show),\n/* harmony export */   \"createPhotos\": () => (/* binding */ createPhotos),\n/* harmony export */   \"fillPostList\": () => (/* binding */ fillPostList)\n/* harmony export */ });\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination */ \"./src/pagination.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n // export {fillPostList}\n\nvar state = {\n  photos: []\n};\nfunction getPhotos(skip, limit) {\n  return fetch(\"https://jsonplaceholder.typicode.com/photos?_start=\".concat(skip, \"&_limit=\").concat(limit), {\n    headers: {\n      \"Content-type\": \"application/json: charset=YTF-8\"\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (photos) {\n    state.photos = photos;\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loader.style.display = 'none';\n    fillPostList(photos);\n    console.log(photos);\n  });\n}\nfunction closeShowedImage() {\n  var mainWrapper = document.querySelector('.mainWrapper');\n  var blackCover = document.querySelector('.blackCover');\n  var showedImageWrapper = document.querySelector('.showedImageWrapper');\n  mainWrapper.removeChild(blackCover);\n  mainWrapper.removeChild(showedImageWrapper); // Dom.wrapper.remove('.imageWrapper');\n  // Dom.wrapper.remove('.blackCover');\n} // export function showImage(index) {\n//      // e.target.child\n//     const clickedPhoto = state.photos[index];\n//     console.log('clickedPhoto: ', clickedPhoto)\n//\n//     const blackCover = document.createElement('div');\n//     blackCover.className = 'blackCover'\n//     blackCover.onclick = closeShowedImage;\n//\n//     const showedImageWrapper = document.createElement('div');\n//     showedImageWrapper.className = 'showedImageWrapper'\n//\n//     const imageWrapper = document.createElement('div');\n//     imageWrapper.className = 'imageWrapper'\n//\n//     const closeIcon = document.createElement('span')\n//     closeIcon.innerHTML = \"&#10006\";\n//     closeIcon.className = 'closeIcon';\n//     closeIcon.onclick = closeShowedImage;\n//\n//     const showedImage = document.createElement('img')\n//     showedImage.className = 'showedImage';\n//     showedImage.src = clickedPhoto.url;\n//\n//     imageWrapper.appendChild(closeIcon);\n//     imageWrapper.appendChild(showedImage);\n//     showedImageWrapper.appendChild(imageWrapper);\n//     Dom.wrapper.appendChild(showedImageWrapper);\n//     Dom.wrapper.appendChild(blackCover);\n// }\n\nfunction show(index) {\n  var clickedPhoto = state.photos[index]; // console.log('clickedPhoto: ', clikedPhoto)\n\n  var blackCover = document.createElement('div');\n  blackCover.className = 'blackCover';\n  blackCover.onclick = closeShowedImage;\n  var showedImageWrapper = document.createElement('div');\n  showedImageWrapper.className = 'showedImageWrapper';\n  var imageWrapper = document.createElement('div');\n  imageWrapper.className = 'imageWrapper';\n  var closeIcon = document.createElement('span');\n  closeIcon.innerHTML = \"&#10006\";\n  closeIcon.className = 'closeIcon';\n  closeIcon.onclick = closeShowedImage;\n  var showedImage = document.createElement('img');\n  showedImage.className = 'showedImage';\n  showedImage.src = clickedPhoto.url;\n  imageWrapper.appendChild(closeIcon);\n  imageWrapper.appendChild(showedImage);\n  showedImageWrapper.appendChild(imageWrapper);\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrapper.appendChild(showedImageWrapper);\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrapper.appendChild(blackCover);\n}\nwindow.show = show;\nvar createPhotos = function createPhotos(photoItem, index) {\n  return \"\\n                <div onclick=\\\"show(\".concat(index, \")\\\" class = \\\"photoWrapper\\\">\\n                    <div class=\\\"post\\\">\\n                        <img class=\\\"clickable\\\" src=\\\"\").concat(photoItem.url, \"\\\"> \\n                    </div>\\n                </div>\\n            \");\n};\nvar fillPostList = function fillPostList(photos) {\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].photosList.innerHTML = \"\";\n\n  if (photos.length) {\n    photos.forEach(function (photo, index) {\n      return _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].photosList.innerHTML += createPhotos(photo, index);\n    });\n  }\n};\ndocument.addEventListener('DOMContentLoaded', function () {\n  return (0,_pagination__WEBPACK_IMPORTED_MODULE_0__.showPagination)(5000, 15);\n}, false);\n\n//# sourceURL=webpack://packege-name/./src/main.js?");

/***/ }),

/***/ "./src/pagination.js":
/*!***************************!*\
  !*** ./src/pagination.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pagination\": () => (/* binding */ Pagination),\n/* harmony export */   \"showPagination\": () => (/* binding */ showPagination)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\n\n // import {showImage} from \"./main\";\n\n\nvar Pagination = {\n  code: '',\n  Extend: function Extend(data) {\n    data = data || {};\n    Pagination.size = data.size || 300;\n    Pagination.page = data.page || 1;\n    Pagination.step = data.step || 3;\n    Pagination.skip = data.skip || 0;\n    Pagination.limit = data.limit;\n    (0,_main__WEBPACK_IMPORTED_MODULE_1__.getPhotos)(Pagination.skip, Pagination.limit);\n    (0,_main__WEBPACK_IMPORTED_MODULE_1__.fillPostList)(_main__WEBPACK_IMPORTED_MODULE_1__.state.photos);\n  },\n  Add: function Add(from, to) {\n    for (var i = from; i < to; i++) {\n      Pagination.code += '<a>' + i + '</a>';\n    }\n  },\n  Last: function Last() {\n    Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';\n  },\n  First: function First() {\n    Pagination.code += '<a>1</a><i>...</i>';\n  },\n  Click: function Click() {\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loader.style.display = 'block';\n    Pagination.page = +this.innerHTML;\n    Pagination.ChangeSkip();\n    Pagination.Start();\n  },\n  ChangeSkip: function ChangeSkip() {\n    if (Pagination.page >= 2) {\n      Pagination.skip = (Pagination.page - 1) * Pagination.limit;\n    } else {\n      Pagination.skip = 0;\n    }\n\n    (0,_main__WEBPACK_IMPORTED_MODULE_1__.getPhotos)(Pagination.skip, Pagination.limit);\n  },\n  Prev: function Prev() {\n    Pagination.page--;\n\n    if (Pagination.page < 1) {\n      Pagination.page = 1;\n    }\n\n    Pagination.ChangeSkip();\n    Pagination.Start();\n  },\n  Next: function Next() {\n    Pagination.page++;\n\n    if (Pagination.page > Pagination.size) {\n      Pagination.page = Pagination.size;\n    }\n\n    Pagination.ChangeSkip();\n    Pagination.Start();\n  },\n  Bind: function Bind() {\n    var a = Pagination.e.getElementsByTagName('a');\n\n    for (var i = 0; i < a.length; i++) {\n      if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';\n      a[i].addEventListener('click', Pagination.Click, false);\n    }\n  },\n  Finish: function Finish() {\n    Pagination.e.innerHTML = Pagination.code;\n    Pagination.code = '';\n    Pagination.Bind();\n  },\n  Start: function Start() {\n    if (Pagination.size < Pagination.step * 2 + 6) {\n      Pagination.Add(1, Pagination.size + 1);\n    } else if (Pagination.page < Pagination.step * 2 + 1) {\n      Pagination.Add(1, Pagination.step * 2 + 4);\n      Pagination.Last();\n    } else if (Pagination.page > Pagination.size - Pagination.step * 2) {\n      Pagination.First();\n      Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);\n    } else {\n      Pagination.First();\n      Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);\n      Pagination.Last();\n    }\n\n    Pagination.Finish();\n  },\n  Buttons: function Buttons(e) {\n    var nav = e.getElementsByTagName('a');\n    nav[0].addEventListener('click', Pagination.Prev, false);\n    nav[1].addEventListener('click', Pagination.Next, false);\n  },\n  Create: function Create(e) {\n    var html = ['<a>&#9668;</a>', '<span></span>', '<a>&#9658;</a>'];\n    e.innerHTML = html.join('');\n    Pagination.e = e.getElementsByTagName('span')[0];\n    Pagination.Buttons(e);\n  },\n  Init: function Init(e, data) {\n    Pagination.Extend(data);\n    Pagination.Create(e);\n    Pagination.Start();\n  }\n};\nvar showPagination = function showPagination(totalCountUnits, limit) {\n  _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loader.style.display = 'block';\n  Pagination.Init(document.getElementById('pagination'), {\n    size: Math.ceil(totalCountUnits / limit),\n    page: 1,\n    step: 3,\n    skip: 0,\n    limit: limit\n  });\n};\n\n//# sourceURL=webpack://packege-name/./src/pagination.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n    margin: 0;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\n.photos{\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    margin: auto;\\r\\n    transition: 0.5s;\\r\\n    max-width: 1030px;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\nimg{\\r\\n    width: 200px;\\r\\n    margin: 3px\\r\\n}\\r\\n\\r\\n.showedImageWrapper {\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    z-index: 2;\\r\\n}\\r\\n.showedImage{\\r\\n    position: absolute;\\r\\n    width: 600px;\\r\\n    height: 600px;\\r\\n    top: 46%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    z-index: 2;\\r\\n    object-fit: fill;\\r\\n}\\r\\n\\r\\n.closeIcon {\\r\\n    position: absolute;\\r\\n    top: -285px;\\r\\n    left: 265px;\\r\\n    font-size: 22px;\\r\\n    z-index: 3;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.imageWrapper {\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.blackCover {\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    height: 106.5vh;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n    background: #000000;\\r\\n    opacity: 0.5;\\r\\n    z-index: 1;\\r\\n}\\r\\n\\r\\n.mainWrapper {\\r\\n    position: relative;\\r\\n    min-height: 674px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n}\\r\\n\\r\\n#loader {\\r\\n    display: none;\\r\\n    position: absolute;\\r\\n    top: 50%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -50%);\\r\\n}\\r\\n\\r\\n#pagination {\\r\\n    display: inline-block;\\r\\n    vertical-align: middle;\\r\\n    border-radius: 4px;\\r\\n    border-bottom: 1px solid #FFFFFF;\\r\\n    width: max-content;\\r\\n    position: absolute;\\r\\n    top: 100%;\\r\\n    left: 50%;\\r\\n    transform: translate(-50%, -5%);\\r\\n}\\r\\n\\r\\n#pagination a{\\r\\n    display: inline-block;\\r\\n    vertical-align: middle;\\r\\n    width: 45px;\\r\\n    height: 20px;\\r\\n    text-align: center;\\r\\n    font-size: 18px;\\r\\n    padding: 3px 0 2px 0;\\r\\n    user-select:none;\\r\\n}\\r\\n\\r\\n#pagination a {\\r\\n    margin: 0 2px 0 2px;\\r\\n    border-radius: 4px;\\r\\n    border: 1px solid #efb4e1;\\r\\n    box-shadow: inset 0 1px 0 0 #FFF, 0 1px 2px #666;\\r\\n    text-shadow: 0 1px 1px #FFF;\\r\\n    background-color: #efb4e1;\\r\\n}\\r\\n#pagination i {\\r\\n    margin: 0 3px 0 3px;\\r\\n}\\r\\n#pagination a.current {\\r\\n    border: 1px solid #E9E9E9;\\r\\n    box-shadow: 0 1px 1px #999;\\r\\n    background-color: #DFDFDF;\\r\\n    background-image: -webkit-linear-gradient(top, #D0D0D0, #EBEBEB);\\r\\n    background-image:    -moz-linear-gradient(top, #D0D0D0, #EBEBEB);\\r\\n    background-image:     -ms-linear-gradient(top, #D0D0D0, #EBEBEB);\\r\\n    background-image:      -o-linear-gradient(top, #D0D0D0, #EBEBEB);\\r\\n    background-image:         linear-gradient(top, #D0D0D0, #EBEBEB);\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://packege-name/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://packege-name/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://packege-name/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://packege-name/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://packege-name/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://packege-name/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://packege-name/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://packege-name/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://packege-name/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://packege-name/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
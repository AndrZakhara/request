/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/HttpRequest.js":
/*!************************************!*\
  !*** ./src/helpers/HttpRequest.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/helpers/utils.js\");\n\r\n\r\nclass HttpRequest {\r\n  constructor({ baseUrl, headers }) {\r\n    this.baseUrl = baseUrl;\r\n    this.headers = headers;\r\n  }\r\n\r\n  get(url, config) {\r\n    const requestConfig = Object.assign({}, config, {\r\n      baseUrl: this.baseUrl,\r\n      baseHeaders: this.headers,\r\n      url,\r\n      method: 'GET'\r\n    });\r\n\r\n    return new Promise((resolve, reject) => {\r\n      const xhr = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createRequest\"])(requestConfig, resolve, reject);\r\n      xhr.send();\r\n    });\r\n  }\r\n\r\n  post(url, config) {\r\n    const requestConfig = Object.assign({}, config, {\r\n      baseUrl: this.baseUrl,\r\n      baseHeaders: this.headers,\r\n      url,\r\n      method: 'POST'\r\n    });\r\n\r\n    return new Promise((resolve, reject) => {\r\n      const xhr = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createRequest\"])(requestConfig, resolve, reject);\r\n      const { data } = config;\r\n\r\n      if (data) {\r\n        xhr.send(data);\r\n      } else {\r\n        xhr.send();\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HttpRequest);\r\n\n\n//# sourceURL=webpack:///./src/helpers/HttpRequest.js?");

/***/ }),

/***/ "./src/helpers/model.js":
/*!******************************!*\
  !*** ./src/helpers/model.js ***!
  \******************************/
/*! exports provided: getListOfItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getListOfItems\", function() { return getListOfItems; });\n/* harmony import */ var _HttpRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpRequest */ \"./src/helpers/HttpRequest.js\");\n\r\n\r\nfunction getListOfItems() {\r\n  const req = new _HttpRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ baseUrl: 'http://localhost:8000' });\r\n\r\n  return req.get('/list', { responseType: 'json' });\r\n}\n\n//# sourceURL=webpack:///./src/helpers/model.js?");

/***/ }),

/***/ "./src/helpers/progress.js":
/*!*********************************!*\
  !*** ./src/helpers/progress.js ***!
  \*********************************/
/*! exports provided: onDownloadProgress, onUploadProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDownloadProgress\", function() { return onDownloadProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onUploadProgress\", function() { return onUploadProgress; });\nfunction onDownloadProgress(e) {\r\n  const width = Math.floor(e.loaded / e.total * 100);\r\n  const element = document.querySelector('.progress-download');\r\n\r\n  element.style.setProperty('--progress-download-width', width);\r\n}\r\n\r\nfunction onUploadProgress(e) {\r\n  const width = Math.floor(e.loaded / e.total * 100);\r\n  const element = document.querySelector('.progress-upload');\r\n\r\n  element.style.setProperty('--progress-upload-width', width);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/helpers/progress.js?");

/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/*! exports provided: createElement, createUrl, createRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrl\", function() { return createUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRequest\", function() { return createRequest; });\n/* harmony import */ var _HttpRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpRequest */ \"./src/helpers/HttpRequest.js\");\n\r\n\r\nfunction createElement(tag, props, ...children) {\r\n  const element = document.createElement(tag);\r\n\r\n  Object.keys(props).forEach(key => (element[key] = props[key]));\r\n\r\n  children.forEach(child => {\r\n    let node = child;\r\n\r\n    if (typeof child === 'string') {\r\n      node = document.createTextNode(child);\r\n    }\r\n\r\n    element.appendChild(node);\r\n  });\r\n\r\n  return element;\r\n}\r\n\r\nfunction createUrl(baseUrl, url, params) {\r\n  const mainUrl = new URL(baseUrl + url);\r\n\r\n  Object.keys(params).forEach(key => mainUrl.searchParams.set(key, params[key]));\r\n\r\n  return mainUrl;\r\n}\r\n\r\nfunction createRequest(requestConfig, resolve, reject) {\r\n  const {\r\n    baseHeaders,\r\n    baseUrl,\r\n    headers,\r\n    method,\r\n    params = {},\r\n    responseType = 'json',\r\n    transformResponse,\r\n    onDownloadProgress,\r\n    onUploadProgress,\r\n    url\r\n  } = requestConfig;\r\n\r\n  const requestUrl = createUrl(baseUrl, url, params);\r\n\r\n  const xhr = new XMLHttpRequest();\r\n\r\n  xhr.open(method, requestUrl, true);\r\n  xhr.responseType = responseType;\r\n\r\n  const allHeaders = Object.assign({}, baseHeaders, headers);\r\n  Object.keys(allHeaders).forEach(key => xhr.setRequestHeader(key, allHeaders[key]));\r\n\r\n  if (typeof onUploadProgress === 'function') {\r\n    xhr.upload.onprogress = e => onUploadProgress(e);\r\n    xhr.upload.onloadend = e => onUploadProgress(e);\r\n  } else if (typeof onDownloadProgress === 'function') {\r\n    xhr.onprogress = e => onDownloadProgress(e);\r\n    xhr.onloadend = e => onDownloadProgress(e);\r\n  }\r\n\r\n  xhr.onload = () => {\r\n    if (xhr.status >= 200 && xhr.status < 300) {\r\n      const response = transformResponse\r\n        ? transformResponse.reduce((acc, fn) => fn(acc), xhr.response)\r\n        : xhr;\r\n      resolve(response);\r\n    } else {\r\n      reject(xhr.statusText);\r\n    }\r\n  };\r\n  xhr.onerror = () => reject(xhr.statusText);\r\n\r\n  return xhr;\r\n}\r\n\r\n// export function getListOfItems() {\r\n//   const req = new HttpRequest({ baseUrl: 'http://localhost:8000' });\r\n//\r\n//   return req.get('/list', { responseType: 'json' });\r\n// }\r\n\r\n// function downloadFile(url, fileName) {\r\n//   const a = document.createElement('a');\r\n//   a.href = url;\r\n//   a.download = fileName;\r\n//   a.click();\r\n// }\r\n//\r\n// function appendImage(url) {\r\n//   const node = document.querySelector('.download-img');\r\n//\r\n//   if (node) {\r\n//     node.src = url;\r\n//   } else {\r\n//     const img = document.createElement('img');\r\n//     img.src = url;\r\n//     img.className = 'download-img';\r\n//     document.body.appendChild(img);\r\n//   }\r\n// }\n\n//# sourceURL=webpack:///./src/helpers/utils.js?");

/***/ }),

/***/ "./src/helpers/view.js":
/*!*****************************!*\
  !*** ./src/helpers/view.js ***!
  \*****************************/
/*! exports provided: progressBarView, hendlerClickSelectUploadFile, hendlerOnChangeSelectUploadFile, createElementUploadFormView, createElementDownloadFormView, createListOfFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"progressBarView\", function() { return progressBarView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hendlerClickSelectUploadFile\", function() { return hendlerClickSelectUploadFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hendlerOnChangeSelectUploadFile\", function() { return hendlerOnChangeSelectUploadFile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElementUploadFormView\", function() { return createElementUploadFormView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElementDownloadFormView\", function() { return createElementDownloadFormView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createListOfFiles\", function() { return createListOfFiles; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/helpers/utils.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/helpers/model.js\");\n\r\n\r\n\r\n\r\nfunction progressBarView(elementClassName, processMessage) {\r\n  const progressStatus = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', { className: `progress ${elementClassName}` });\r\n  const progressNotificatione = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', { className: 'progress-notificatione' }, `${processMessage} progress: `);\r\n  const progressWrapper = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', { className: 'progress-wrapper' }, progressNotificatione, progressStatus);\r\n\r\n  return progressWrapper;\r\n}\r\n\r\nfunction hendlerClickSelectUploadFile(e) {\r\n  e.preventDefault();\r\n  document.querySelector('.file-upload').click();\r\n}\r\n\r\nfunction hendlerOnChangeSelectUploadFile(e) {\r\n  e.preventDefault();\r\n  console.log(e.target.files.item(0).name);\r\n  document.querySelector('.upload-file-name').innerHTML = e.target.files.item(0).name;\r\n  document.querySelector('.progress').style.display = 'block';\r\n  document.querySelector('.progress-notificatione').style.display = 'block';\r\n}\r\n\r\nfunction createElementUploadFormView() {\r\n  const inputTypeFileUpload = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { className: 'file-upload', type: 'file', name: 'sampleFile' });\r\n  inputTypeFileUpload.onchange = e => hendlerOnChangeSelectUploadFile(e);\r\n  const inputTypeSubmitUpload = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { className: 'form-button', type: 'submit', value: 'Upload' });\r\n  const buttonSelectFile = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('button', { className: 'form-button select-button' }, 'Select file');\r\n  buttonSelectFile.onclick = e => hendlerClickSelectUploadFile(e);\r\n  const elementTextFileName = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', { className: 'upload-file-name' }, 'No file selected...');\r\n  const uploadForm = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'form',\r\n    { id: 'uploadForm', encType: 'multipart/form-data' },\r\n    buttonSelectFile,\r\n    elementTextFileName,\r\n    inputTypeFileUpload,\r\n    inputTypeSubmitUpload\r\n  );\r\n\r\n  return uploadForm;\r\n}\r\n\r\nfunction createElementDownloadFormView() {\r\n  const inputTypeTextDownload = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { type: 'text', name: 'sampleFile' });\r\n  const inputTypeSubmitDownload = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { className: 'form-button', type: 'submit', value: 'download' });\r\n\r\n  const downloadForm = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'form',\r\n    { id: 'downloadForm', encType: 'multipart/form-data' },\r\n    inputTypeTextDownload,\r\n    inputTypeSubmitDownload\r\n  );\r\n\r\n  return downloadForm;\r\n}\r\n\r\nfunction createListOfFiles() {\r\n  const element = document.querySelector('.items-wrapper');\r\n  const ulElement = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('ul', { className: 'items-list' });\r\n  const reqest = Object(_model__WEBPACK_IMPORTED_MODULE_1__[\"getListOfItems\"])();\r\n  reqest\r\n    .then(data => {\r\n      data.response.forEach(el => {\r\n        const liElement = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('li', {}, el);\r\n        liElement.onclick = e => console.log(e.target.textContent); // eslint-disable-line\r\n        ulElement.appendChild(liElement);\r\n      });\r\n    });\r\n  element.appendChild(ulElement);\r\n}\n\n//# sourceURL=webpack:///./src/helpers/view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/utils */ \"./src/helpers/utils.js\");\n/* harmony import */ var _helpers_HttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/HttpRequest */ \"./src/helpers/HttpRequest.js\");\n/* harmony import */ var _helpers_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/progress */ \"./src/helpers/progress.js\");\n/* harmony import */ var _helpers_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/view */ \"./src/helpers/view.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createApp() {\r\n  const uploadForm = Object(_helpers_view__WEBPACK_IMPORTED_MODULE_3__[\"createElementUploadFormView\"])();\r\n  const downloadForm = Object(_helpers_view__WEBPACK_IMPORTED_MODULE_3__[\"createElementDownloadFormView\"])();\r\n  const progressBarUpload = Object(_helpers_view__WEBPACK_IMPORTED_MODULE_3__[\"progressBarView\"])('progress-upload', 'Upload');\r\n  const progressBarDownload = Object(_helpers_view__WEBPACK_IMPORTED_MODULE_3__[\"progressBarView\"])('progress-download', 'Download');\r\n\r\n  // uploadForm.appendChild(progressBarUpload);\r\n  // downloadForm.appendChild(progressBarDownload);\r\n\r\n  const formWrapper = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'div',\r\n    { className: 'form-wrapper' },\r\n    uploadForm,\r\n    progressBarUpload,\r\n    downloadForm,\r\n    progressBarDownload\r\n  );\r\n\r\n  const itemsListHeader = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('h4', { className: 'items-list-header' }, 'Files on eDisk');\r\n  const itemsList = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'div',\r\n    { className: 'items-wrapper' },\r\n    itemsListHeader,\r\n  );\r\n\r\n  const mainAppWrapper = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'div',\r\n    { className: 'main-wrapper' },\r\n    itemsList,\r\n    formWrapper,\r\n  );\r\n\r\n  document.querySelector('.app').appendChild(mainAppWrapper);\r\n\r\n  document.getElementById('uploadForm').onsubmit = function(e) {\r\n    e.preventDefault();\r\n    const form = new FormData();\r\n    const myHeaders = new Headers();\r\n\r\n    myHeaders.append('Content-Type', 'multipart/form-data');\r\n    form.append('sampleFile', e.target.sampleFile.files[0]);\r\n\r\n    const req = new _helpers_HttpRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ baseUrl: 'http://localhost:8000' });\r\n\r\n    req.post('/upload', { responseType: 'json', data: form, onUploadProgress: _helpers_progress__WEBPACK_IMPORTED_MODULE_2__[\"onUploadProgress\"] })\r\n      .then(data => console.log(data.status)); // eslint-disable-line\r\n  };\r\n\r\n  Object(_helpers_view__WEBPACK_IMPORTED_MODULE_3__[\"createListOfFiles\"])();\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', createApp);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
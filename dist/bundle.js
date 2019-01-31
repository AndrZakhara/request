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

/***/ "./src/Components/DownLoadForm.js":
/*!****************************************!*\
  !*** ./src/Components/DownLoadForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createElementDownloadForm; });\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ \"./src/helpers/utils.js\");\n/* harmony import */ var _libs_HttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/HttpRequest */ \"./src/libs/HttpRequest.js\");\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ \"./src/Components/ProgressBar.js\");\n\r\n\r\n\r\n\r\nfunction downloadFile(data, fileName) {\r\n  const elementLink = document.createElement('a');\r\n  const fileURL = URL.createObjectURL(data);\r\n  elementLink.href = fileURL;\r\n  elementLink.download = fileName;\r\n  elementLink.click();\r\n}\r\n\r\n// function appendImage(url) {\r\n//   const node = document.querySelector('.download-img');\r\n//\r\n//   if (node) {\r\n//     node.src = url;\r\n//   } else {\r\n//     const img = document.createElement('img');\r\n//     img.src = url;\r\n//     img.className = 'download-img';\r\n//     document.body.appendChild(img);\r\n//   }\r\n// }\r\n\r\nfunction createElementDownloadForm() {\r\n  let inputDownloadValue = null;\r\n  const inputTypeTextDownload = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'input',\r\n    {\r\n      className: 'text-input-download-form',\r\n      type: 'text',\r\n      name: 'sampleFile'\r\n    }\r\n  );\r\n  const inputTypeSubmitDownload = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'input',\r\n    {\r\n      className: 'form-button',\r\n      type: 'submit',\r\n      value: 'download'\r\n    }\r\n  );\r\n\r\n  inputTypeTextDownload.onchange = e => {\r\n    inputDownloadValue = e.target.value;\r\n    // document.querySelector('.progress').style.display = 'block';\r\n    // document.querySelector('.progress-notificatione-download').style.display = 'block';\r\n  };\r\n\r\n  const downloadForm = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'form',\r\n    { id: 'downloadForm', encType: 'multipart/form-data' },\r\n    inputTypeTextDownload,\r\n    inputTypeSubmitDownload\r\n  );\r\n\r\n  downloadForm.onsubmit = function(e) {\r\n    e.preventDefault();\r\n    const myHeaders = new Headers();\r\n\r\n    myHeaders.append('Content-Type', 'multipart/form-data');\r\n\r\n    const req = new _libs_HttpRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ baseUrl: 'http://localhost:8000' });\r\n    req.get(`/files/${inputDownloadValue}`, { responseType: 'blob', onDownloadProgress: _ProgressBar__WEBPACK_IMPORTED_MODULE_2__[\"onDownloadProgress\"] })\r\n      .then(data => {\r\n        console.log(data.response); // eslint-disable-line\r\n        downloadFile(data.response, inputDownloadValue);\r\n      });\r\n  };\r\n\r\n  return downloadForm;\r\n}\n\n//# sourceURL=webpack:///./src/Components/DownLoadForm.js?");

/***/ }),

/***/ "./src/Components/FormWrapper.js":
/*!***************************************!*\
  !*** ./src/Components/FormWrapper.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createMainForm; });\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ \"./src/helpers/utils.js\");\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar */ \"./src/Components/ProgressBar.js\");\n/* harmony import */ var _UploadForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadForm */ \"./src/Components/UploadForm.js\");\n/* harmony import */ var _DownLoadForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DownLoadForm */ \"./src/Components/DownLoadForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createMainForm() {\r\n  const uploadForm = Object(_UploadForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const downloadForm = Object(_DownLoadForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  const progressBarUpload = Object(_ProgressBar__WEBPACK_IMPORTED_MODULE_1__[\"progressBar\"])('Upload');\r\n  const progressBarDownload = Object(_ProgressBar__WEBPACK_IMPORTED_MODULE_1__[\"progressBar\"])('Download');\r\n  const uploadFormTitle = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('h2', { className: 'form-title' }, 'Add file to eDisk');\r\n  const downloadFormTitle = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('h2', { className: 'form-title' }, 'Download file from eDisk');\r\n\r\n  return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'div',\r\n    { className: 'form-wrapper' },\r\n    uploadFormTitle,\r\n    uploadForm,\r\n    progressBarUpload,\r\n    downloadFormTitle,\r\n    downloadForm,\r\n    progressBarDownload\r\n  );\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/Components/FormWrapper.js?");

/***/ }),

/***/ "./src/Components/ListOfItems.js":
/*!***************************************!*\
  !*** ./src/Components/ListOfItems.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createListOfFiles; });\n/* harmony import */ var _libs_HttpRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/HttpRequest */ \"./src/libs/HttpRequest.js\");\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ \"./src/helpers/utils.js\");\n\r\n\r\n\r\nfunction getListOfItems() {\r\n  const req = new _libs_HttpRequest__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ baseUrl: 'http://localhost:8000' });\r\n\r\n  return req.get('/list', { responseType: 'json' });\r\n}\r\n\r\nfunction createListOfFiles() {\r\n  const itemsListHeader = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('h4', { className: 'items-list-header' }, 'Files on eDisk');\r\n  const ulElement = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('ul', { className: 'items-list' });\r\n  const reqest = getListOfItems();\r\n\r\n  reqest\r\n    .then(data => {\r\n      data.response.forEach(el => {\r\n        const liElement = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('li', {}, el);\r\n        liElement.onclick = e => console.log(e.target.textContent); // eslint-disable-line\r\n        ulElement.appendChild(liElement);\r\n      });\r\n    });\r\n\r\n  const itemsList = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(\r\n    'div',\r\n    { className: 'items-wrapper' },\r\n    itemsListHeader,\r\n    ulElement\r\n  );\r\n\r\n  return itemsList;\r\n}\n\n//# sourceURL=webpack:///./src/Components/ListOfItems.js?");

/***/ }),

/***/ "./src/Components/ProgressBar.js":
/*!***************************************!*\
  !*** ./src/Components/ProgressBar.js ***!
  \***************************************/
/*! exports provided: onDownloadProgress, onUploadProgress, progressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDownloadProgress\", function() { return onDownloadProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onUploadProgress\", function() { return onUploadProgress; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"progressBar\", function() { return progressBar; });\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ \"./src/helpers/utils.js\");\n\r\n\r\nfunction onDownloadProgress(event) {\r\n  const width = Math.floor(event.loaded / event.total * 100);\r\n  const element = document.querySelector('.progress-download');\r\n\r\n  element.style.setProperty('--progress-download-width', width);\r\n}\r\n\r\nfunction onUploadProgress(e) {\r\n  const width = Math.floor(e.loaded / e.total * 100);\r\n  const element = document.querySelector('.progress-upload');\r\n\r\n  element.style.setProperty('--progress-upload-width', width);\r\n}\r\n\r\nfunction progressBar(processMessage) {\r\n  const elementClassName = processMessage === 'Upload'\r\n    ? 'progress-upload'\r\n    : 'progress-download';\r\n\r\n  const progressStatus = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', { className: `progress ${elementClassName}` });\r\n  const progressNotificatione = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'span',\r\n    { className: 'progress-notificatione' },\r\n    `${processMessage} progress: `\r\n  );\r\n  const progressWrapper = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'div',\r\n    { className: 'progress-wrapper' },\r\n    progressNotificatione,\r\n    progressStatus\r\n  );\r\n\r\n  return progressWrapper;\r\n}\n\n//# sourceURL=webpack:///./src/Components/ProgressBar.js?");

/***/ }),

/***/ "./src/Components/UploadForm.js":
/*!**************************************!*\
  !*** ./src/Components/UploadForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createElementUploadForm; });\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ \"./src/helpers/utils.js\");\n/* harmony import */ var _libs_HttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/HttpRequest */ \"./src/libs/HttpRequest.js\");\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ \"./src/Components/ProgressBar.js\");\n\r\n\r\n\r\n\r\nfunction createElementUploadForm() {\r\n  const hendlerOnChangeSelectUploadFile = e => {\r\n    e.preventDefault();\r\n    const elementSelectForm = document.querySelector('.select-form-button')\r\n    elementSelectForm.innerHTML = e.target.files.item(0).name;\r\n    elementSelectForm.style.color = '#394c5e';\r\n    document.querySelector('.progress').style.display = 'block';\r\n    document.querySelector('.progress-notificatione').style.display = 'block';\r\n  };\r\n\r\n  const hendlerClickSelectUploadFile = e => {\r\n    e.preventDefault();\r\n    document.querySelector('.file-upload').click();\r\n  };\r\n\r\n  const inputTypeFileUpload = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { className: 'file-upload', type: 'file', name: 'sampleFile' });\r\n  inputTypeFileUpload.onchange = e => hendlerOnChangeSelectUploadFile(e);\r\n\r\n  const inputTypeSubmitUpload = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { className: 'form-button', type: 'submit', value: 'Upload' });\r\n\r\n  const buttonSelectFile = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('button', { className: 'select-form-button' }, 'Click to select file..');\r\n  buttonSelectFile.onclick = e => hendlerClickSelectUploadFile(e);\r\n\r\n  // const elementTextFileName = createElement('span', { className: 'upload-file-name' }, 'No file selected...');\r\n  const uploadForm = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'form',\r\n    { id: 'uploadForm', encType: 'multipart/form-data' },\r\n    buttonSelectFile,\r\n    // elementTextFileName,\r\n    inputTypeFileUpload,\r\n    inputTypeSubmitUpload\r\n  );\r\n\r\n  uploadForm.onsubmit = function(e) {\r\n    e.preventDefault();\r\n    const form = new FormData();\r\n    const myHeaders = new Headers();\r\n    const [file] = e.target.sampleFile.files;\r\n\r\n    myHeaders.append('Content-Type', 'multipart/form-data');\r\n    form.append('sampleFile', file);\r\n\r\n    const req = new _libs_HttpRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ baseUrl: 'http://localhost:8000' });\r\n\r\n    req.post('/upload', { responseType: 'json', data: form, onUploadProgress: _ProgressBar__WEBPACK_IMPORTED_MODULE_2__[\"onUploadProgress\"] })\r\n      .then(data => {\r\n        console.log(data.status) // eslint-disable-line\r\n      });\r\n  };\r\n\r\n  return uploadForm;\r\n}\n\n//# sourceURL=webpack:///./src/Components/UploadForm.js?");

/***/ }),

/***/ "./src/helpers/utils.js":
/*!******************************!*\
  !*** ./src/helpers/utils.js ***!
  \******************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nfunction createElement(tag, props, ...children) {\r\n  const element = document.createElement(tag);\r\n\r\n  Object.keys(props).forEach(key => (element[key] = props[key]));\r\n\r\n  children.forEach(child => {\r\n    let node = child;\r\n\r\n    if (typeof child === 'string') {\r\n      node = document.createTextNode(child);\r\n    }\r\n\r\n    element.appendChild(node);\r\n  });\r\n\r\n  return element;\r\n}\n\n//# sourceURL=webpack:///./src/helpers/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/utils */ \"./src/helpers/utils.js\");\n/* harmony import */ var _Components_ListOfItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/ListOfItems */ \"./src/Components/ListOfItems.js\");\n/* harmony import */ var _Components_FormWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/FormWrapper */ \"./src/Components/FormWrapper.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createApp() {\r\n  const mainForm = Object(_Components_FormWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const filesList = Object(_Components_ListOfItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n  const mainAppWrapper = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'div',\r\n    { className: 'main-wrapper' },\r\n    filesList,\r\n    mainForm,\r\n  );\r\n\r\n  document.querySelector('.app').appendChild(mainAppWrapper);\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', createApp);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/libs/HttpRequest.js":
/*!*********************************!*\
  !*** ./src/libs/HttpRequest.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createUrl(baseUrl, url, params) {\r\n  const mainUrl = new URL(baseUrl + url);\r\n  Object.keys(params).forEach(key => mainUrl.searchParams.set(key, params[key]));\r\n\r\n  return mainUrl;\r\n}\r\n\r\nfunction createRequest(requestConfig) {\r\n  const {\r\n    baseHeaders,\r\n    baseUrl,\r\n    data,\r\n    headers,\r\n    method,\r\n    params = {},\r\n    responseType = 'json',\r\n    transformResponse,\r\n    onDownloadProgress,\r\n    onUploadProgress,\r\n    url\r\n  } = requestConfig;\r\n\r\n  return new Promise((resolve, reject) => {\r\n    const requestUrl = createUrl(baseUrl, url, params);\r\n\r\n    const xhr = new XMLHttpRequest();\r\n\r\n    xhr.open(method, requestUrl, true);\r\n    xhr.responseType = responseType;\r\n\r\n    const allHeaders = Object.assign({}, baseHeaders, headers);\r\n    Object.keys(allHeaders).forEach(key => xhr.setRequestHeader(key, allHeaders[key]));\r\n\r\n    if (typeof onUploadProgress === 'function') {\r\n      xhr.upload.onprogress = e => onUploadProgress(e);\r\n      xhr.upload.onloadend = e => onUploadProgress(e);\r\n    } else if (typeof onDownloadProgress === 'function') {\r\n      xhr.onprogress = e => onDownloadProgress(e);\r\n    }\r\n\r\n    xhr.onload = () => {\r\n      if (xhr.status === 200) {\r\n        const response = transformResponse\r\n          ? transformResponse.reduce((acc, fn) => fn(acc), xhr.response)\r\n          : xhr;\r\n        resolve(response);\r\n      } else {\r\n        reject(xhr.statusText);\r\n      }\r\n    };\r\n    xhr.onerror = () => reject(xhr.statusText);\r\n\r\n    if (data) {\r\n      xhr.send(data);\r\n    } else {\r\n      xhr.send();\r\n    }\r\n  });\r\n}\r\n\r\nclass HttpRequest {\r\n  constructor({ baseUrl, headers }) {\r\n    this.baseUrl = baseUrl;\r\n    this.headers = headers;\r\n  }\r\n\r\n  _createRequestConfig(url, config, method) {\r\n    return Object.assign({}, config, {\r\n      baseUrl: this.baseUrl,\r\n      baseHeaders: this.headers,\r\n      url,\r\n      method\r\n    });\r\n  }\r\n\r\n  get(url, config) {\r\n    const requestConfig = this._createRequestConfig(url, config, 'GET');\r\n\r\n    return createRequest(requestConfig);\r\n  }\r\n\r\n  post(url, config) {\r\n    const requestConfig = this._createRequestConfig(url, config, 'POST');\r\n\r\n    return createRequest(requestConfig);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HttpRequest);\r\n\n\n//# sourceURL=webpack:///./src/libs/HttpRequest.js?");

/***/ })

/******/ });
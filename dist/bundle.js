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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/helpers/helper.js\");\n\r\n\r\nclass HttpRequest {\r\n  constructor({ baseUrl, headers }) {\r\n    this.baseUrl = baseUrl;\r\n    this.headers = headers;\r\n  }\r\n\r\n  get(url, config) {\r\n    const {\r\n      headers,\r\n      params,\r\n      responseType = 'json',\r\n      onDownloadProgress = e => console.log(e), // eslint-disable-line\r\n      transformResponse = data => data\r\n    } = config;\r\n\r\n    const requestUrl = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"createUrl\"])(this.baseUrl, url, params);\r\n\r\n    return new Promise((resolve, reject) => {\r\n      const xhr = new XMLHttpRequest();\r\n\r\n      xhr.open('GET', requestUrl, true);\r\n\r\n      xhr.responseType = responseType;\r\n\r\n      Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"setHeaders\"])(xhr, this.headers, headers);\r\n\r\n      xhr.onprogress = e => onDownloadProgress(e);\r\n      xhr.onloadend = e => onDownloadProgress(e);\r\n\r\n      xhr.onload = () => resolve(transformResponse(xhr));\r\n\r\n      xhr.send();\r\n\r\n      xhr.timeout = 30000;\r\n      xhr.ontimeout = () => reject(new Error('server is not responding'));\r\n    });\r\n  }\r\n\r\n  post(url, config) {\r\n    const {\r\n      data,\r\n      headers,\r\n      responseType = 'json',\r\n      onUploadProgress = e => console.log(e), // eslint-disable-line\r\n      transformResponse = data => data\r\n    } = config;\r\n\r\n    const requestUrl = Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"createUrl\"])(this.baseUrl, url);\r\n\r\n    return new Promise((resolve, reject) => {\r\n      const xhr = new XMLHttpRequest();\r\n\r\n      xhr.open('POST', requestUrl, true);\r\n\r\n      xhr.responseType = responseType;\r\n\r\n      Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"setHeaders\"])(xhr, this.headers, headers);\r\n\r\n      xhr.onprogress = e => onUploadProgress(e);\r\n      xhr.onloadend = e => onUploadProgress(e);\r\n\r\n      xhr.onload = () => resolve(transformResponse(xhr));\r\n\r\n      if (data) {\r\n        xhr.send(data);\r\n      } else {\r\n        xhr.send();\r\n      }\r\n\r\n      xhr.timeout = 30000;\r\n      xhr.ontimeout = () => reject(new Error('server is not responding'));\r\n    });\r\n  }\r\n}\r\n\r\n/*\r\nconst reuest = new HttpRequest({\r\n  baseUrl: 'http://localhost:8000',\r\n});\r\n\r\nreuest.get('/user/12345', { onDownloadProgress, headers: {contentType: undefined} })\r\n  .then(response => {\r\n    console.log(response);\r\n  })\r\n  .catch(e => {\r\n    console.log(e)\r\n  });\r\n\r\nreuest.post('/save', { data: formdata, header, onUploadProgress })\r\n  .then(response => {\r\n    console.log(response);\r\n  })\r\n  .catch(e => {\r\n    console.log(e)\r\n  });\r\n\r\nconfig = {\r\n\r\n  // `transformResponse` allows changes to the response data to be made before\r\n  // it is passed to then/catch\r\n  transformResponse: [function (data) {\r\n    // Do whatever you want to transform the data\r\n\r\n    return data;\r\n  }],\r\n\r\n  // `headers` are custom headers to be sent\r\n  headers: {'X-Requested-With': 'XMLHttpRequest'},\r\n\r\n  // `params` are the URL parameters to be sent with the request\r\n  // Must be a plain object or a URLSearchParams object\r\n  params: {\r\n    ID: 12345\r\n  },\r\n\r\n  // `data` is the data to be sent as the request body\r\n  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'\r\n  // When no `transformRequest` is set, must be of one of the following types:\r\n  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams\r\n  // - Browser only: FormData, File, Blob\r\n  // - Node only: Stream, Buffer\r\n\r\n  data: {\r\n    firstName: 'Fred'\r\n  },\r\n\r\n  // `responseType` indicates the type of data that the server will respond with\r\n  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'\r\n  responseType: 'json', // default\r\n\r\n  // `onUploadProgress` allows handling of progress events for uploads\r\n  onUploadProgress: function (progressEvent) {\r\n    // Do whatever you want with the native progress event\r\n  },\r\n\r\n  // `onDownloadProgress` allows handling of progress events for downloads\r\n  onDownloadProgress: function (progressEvent) {\r\n    // Do whatever you want with the native progress event\r\n  },\r\n}\r\n*/\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (HttpRequest);\r\n\n\n//# sourceURL=webpack:///./src/helpers/HttpRequest.js?");

/***/ }),

/***/ "./src/helpers/helper.js":
/*!*******************************!*\
  !*** ./src/helpers/helper.js ***!
  \*******************************/
/*! exports provided: createElement, createUrl, setHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUrl\", function() { return createUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setHeaders\", function() { return setHeaders; });\nfunction createElement(tag, props, ...children) {\r\n  const element = document.createElement(tag);\r\n\r\n  Object.keys(props).forEach(key => (element[key] = props[key]));\r\n\r\n  children.forEach(child => {\r\n    let node = child;\r\n\r\n    if (typeof child === 'string') {\r\n      node = document.createTextNode(child);\r\n    }\r\n\r\n    element.appendChild(node);\r\n  });\r\n\r\n  return element;\r\n}\r\n\r\nfunction createUrl(baseUrl, url, params = {}) {\r\n  const mainUrl = new URL(baseUrl + url);\r\n\r\n  Object.keys(params).forEach(key => mainUrl.searchParams.set(key, params[key]));\r\n\r\n  return mainUrl;\r\n}\r\n\r\nfunction setHeaders(xhr, headers, customHeaders) {\r\n  const allHeaders = Object.assign({}, headers, customHeaders);\r\n\r\n  Object.keys(allHeaders).forEach(key => xhr.setRequestHeader(key, allHeaders[key]));\r\n}\r\n\r\n// function downloadFile(url, fileName) {\r\n//   const a = document.createElement('a');\r\n//   a.href = url;\r\n//   a.download = fileName;\r\n//   a.click();\r\n// }\r\n//\r\n// function appendImage(url) {\r\n//   const node = document.querySelector('.download-img');\r\n//\r\n//   if (node) {\r\n//     node.src = url;\r\n//   } else {\r\n//     const img = document.createElement('img');\r\n//     img.src = url;\r\n//     img.className = 'download-img';\r\n//     document.body.appendChild(img);\r\n//   }\r\n// }\n\n//# sourceURL=webpack:///./src/helpers/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/helper */ \"./src/helpers/helper.js\");\n/* harmony import */ var _helpers_HttpRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/HttpRequest */ \"./src/helpers/HttpRequest.js\");\n\r\n\r\n\r\nfunction createApp() {\r\n  const inputTypeFileUpload = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { type: 'file', name: 'sampleFile' });\r\n  const inputTypeSubmitUpload = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { type: 'submit', value: 'upload' });\r\n\r\n  const uploadForm = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'form',\r\n    { id: 'uploadForm', encType: 'multipart/form-data' },\r\n    inputTypeFileUpload,\r\n    inputTypeSubmitUpload\r\n  );\r\n\r\n  const inputTypeTextDownload = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { type: 'text', name: 'sampleFile' });\r\n  const inputTypeSubmitDownload = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', { type: 'submit', value: 'download' });\r\n\r\n  const downloadForm = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'form',\r\n    { id: 'downloadForm', encType: 'multipart/form-data' },\r\n    inputTypeTextDownload,\r\n    inputTypeSubmitDownload\r\n  );\r\n\r\n  const mainAppWrapper = Object(_helpers_helper__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\r\n    'div',\r\n    { className: 'main-wrapper' },\r\n    uploadForm,\r\n    downloadForm\r\n  );\r\n\r\n  document.querySelector('.app').appendChild(mainAppWrapper);\r\n\r\n  document.getElementById('uploadForm').onsubmit = function(e) {\r\n    e.preventDefault();\r\n\r\n    const form = new FormData();\r\n    const myHeaders = new Headers();\r\n\r\n    myHeaders.append('Content-Type', 'multipart/form-data');\r\n    form.append('sampleFile', e.target.sampleFile.files[0]);\r\n\r\n    const req = new _helpers_HttpRequest__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ baseUrl: 'http://localhost:8000' });\r\n\r\n    req.post('/upload', { responseType: 'blob', data: form })\r\n      .then(data => console.log(data)); // eslint-disable-line\r\n  };\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', createApp);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
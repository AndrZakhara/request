import HttpRequest from './HttpRequest';

export function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.keys(props).forEach(key => (element[key] = props[key]));

  children.forEach(child => {
    let node = child;

    if (typeof child === 'string') {
      node = document.createTextNode(child);
    }

    element.appendChild(node);
  });

  return element;
}

export function createUrl(baseUrl, url, params) {
  const mainUrl = new URL(baseUrl + url);

  Object.keys(params).forEach(key => mainUrl.searchParams.set(key, params[key]));

  return mainUrl;
}

export function createRequest(requestConfig, resolve, reject) {
  const {
    baseHeaders,
    baseUrl,
    headers,
    method,
    params = {},
    responseType = 'json',
    transformResponse,
    onDownloadProgress,
    onUploadProgress,
    url
  } = requestConfig;

  const requestUrl = createUrl(baseUrl, url, params);

  const xhr = new XMLHttpRequest();

  xhr.open(method, requestUrl, true);
  xhr.responseType = responseType;

  const allHeaders = Object.assign({}, baseHeaders, headers);
  Object.keys(allHeaders).forEach(key => xhr.setRequestHeader(key, allHeaders[key]));

  if (typeof onUploadProgress === 'function') {
    xhr.upload.onprogress = e => onUploadProgress(e);
    xhr.upload.onloadend = e => onUploadProgress(e);
  } else if (typeof onDownloadProgress === 'function') {
    xhr.onprogress = e => onDownloadProgress(e);
    xhr.onloadend = e => onDownloadProgress(e);
  }

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = transformResponse
        ? transformResponse.reduce((acc, fn) => fn(acc), xhr.response)
        : xhr;
      resolve(response);
    } else {
      reject(xhr.statusText);
    }
  };
  xhr.onerror = () => reject(xhr.statusText);

  return xhr;
}

// export function getListOfItems() {
//   const req = new HttpRequest({ baseUrl: 'http://localhost:8000' });
//
//   return req.get('/list', { responseType: 'json' });
// }

// function downloadFile(url, fileName) {
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = fileName;
//   a.click();
// }
//
// function appendImage(url) {
//   const node = document.querySelector('.download-img');
//
//   if (node) {
//     node.src = url;
//   } else {
//     const img = document.createElement('img');
//     img.src = url;
//     img.className = 'download-img';
//     document.body.appendChild(img);
//   }
// }
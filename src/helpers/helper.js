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

export function createUrl(baseUrl, url, params = {}) {
  const mainUrl = new URL(baseUrl + url);

  Object.keys(params).forEach(key => mainUrl.searchParams.set(key, params[key]));

  return mainUrl;
}

export function setHeaders(xhr, headers, customHeaders) {
  const allHeaders = Object.assign({}, headers, customHeaders);

  Object.keys(allHeaders).forEach(key => xhr.setRequestHeader(key, allHeaders[key]));
}

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
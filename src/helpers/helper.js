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

  for (const key in params) {
    url.searchParams.set(key, params[key]);
  }

  return mainUrl;
}

export function setHeaders(xhr, headers) {
  for (const key in headers) {
    xhr.setRequestHeader(key, headers[key]);
  }
}


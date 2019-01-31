function createUrl(baseUrl, url, params) {
  const mainUrl = new URL(baseUrl + url);
  Object.keys(params).forEach(key => mainUrl.searchParams.set(key, params[key]));

  return mainUrl;
}

function createRequest(requestConfig) {
  const {
    baseHeaders,
    baseUrl,
    data,
    headers,
    method,
    params = {},
    responseType = 'json',
    transformResponse,
    onDownloadProgress,
    onUploadProgress,
    url
  } = requestConfig;

  return new Promise((resolve, reject) => {
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
    }

    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = transformResponse
          ? transformResponse.reduce((acc, fn) => fn(acc), xhr.response)
          : xhr;
        resolve(response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);

    if (data) {
      xhr.send(data);
    } else {
      xhr.send();
    }
  });
}

class HttpRequest {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _createRequestConfig(url, config, method) {
    return Object.assign({}, config, {
      baseUrl: this.baseUrl,
      baseHeaders: this.headers,
      url,
      method
    });
  }

  get(url, config) {
    const requestConfig = this._createRequestConfig(url, config, 'GET');

    return createRequest(requestConfig);
  }

  post(url, config) {
    const requestConfig = this._createRequestConfig(url, config, 'POST');

    return createRequest(requestConfig);
  }
}

export default HttpRequest;

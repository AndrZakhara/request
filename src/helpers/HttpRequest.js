import {
  createUrl,
  setHeaders
} from './helper';

class HttpRequest {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  get(url, config) {
    const {
      headers,
      params,
      responseType = 'json',
      onDownloadProgress = e => e, // eslint-disable-line
      transformResponse = data => data
    } = config;

    const requestUrl = createUrl(this.baseUrl, url, params);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', requestUrl, true);

      xhr.responseType = responseType;

      setHeaders(xhr, this.headers, headers);

      xhr.onprogress = e => onDownloadProgress(e);
      xhr.onloadend = e => onDownloadProgress(e);

      xhr.onload = () => resolve(transformResponse(xhr));

      xhr.send();

      xhr.timeout = 30000;
      xhr.ontimeout = () => reject(new Error('server is not responding'));
    });
  }

  post(url, config) {
    const {
      data,
      headers,
      responseType = 'json',
      onUploadProgress = (e) => console.log(e), // eslint-disable-line
      transformResponse = data => data
    } = config;

    const requestUrl = createUrl(this.baseUrl, url);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('POST', requestUrl, true);

      xhr.responseType = responseType;

      setHeaders(xhr, this.headers, headers);

      xhr.upload.onprogress = e => onUploadProgress(e);
      xhr.upload.onloadend = e => onUploadProgress(e);

      xhr.onload = () => resolve(transformResponse(xhr));

      if (data) {
        xhr.send(data);
      } else {
        xhr.send();
      }

      xhr.timeout = 30000;
      xhr.ontimeout = () => reject(new Error('server is not responding'));
    });
  }
}

export default HttpRequest;

import { createRequest } from './utils';

class HttpRequest {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  get(url, config) {
    const requestConfig = Object.assign({}, config, {
      baseUrl: this.baseUrl,
      baseHeaders: this.headers,
      url,
      method: 'GET'
    });

    return new Promise((resolve, reject) => {
      const xhr = createRequest(requestConfig, resolve, reject);
      xhr.send();
    });
  }

  post(url, config) {
    const requestConfig = Object.assign({}, config, {
      baseUrl: this.baseUrl,
      baseHeaders: this.headers,
      url,
      method: 'POST'
    });

    return new Promise((resolve, reject) => {
      const xhr = createRequest(requestConfig, resolve, reject);
      const { data } = config;

      if (data) {
        xhr.send(data);
      } else {
        xhr.send();
      }
    });
  }
}

export default HttpRequest;

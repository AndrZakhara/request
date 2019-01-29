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
      onDownloadProgress = e => console.log(e), // eslint-disable-line
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
      onUploadProgress = e => console.log(e), // eslint-disable-line
      transformResponse = data => data
    } = config;

    const requestUrl = createUrl(this.baseUrl, url);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open('POST', requestUrl, true);

      xhr.responseType = responseType;

      setHeaders(xhr, this.headers, headers);

      xhr.onprogress = e => onUploadProgress(e);
      xhr.onloadend = e => onUploadProgress(e);

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

/*
const reuest = new HttpRequest({
  baseUrl: 'http://localhost:8000',
});

reuest.get('/user/12345', { onDownloadProgress, headers: {contentType: undefined} })
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.log(e)
  });

reuest.post('/save', { data: formdata, header, onUploadProgress })
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.log(e)
  });

config = {

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },

  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer

  data: {
    firstName: 'Fred'
  },

  // `responseType` indicates the type of data that the server will respond with
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `onUploadProgress` allows handling of progress events for uploads
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },
}
*/

export default HttpRequest;
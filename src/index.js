import { createElement } from './helpers/helper';
import HttpRequest from './helpers/HttpRequest';

function createApp() {
  const inputTypeFileUpload = createElement('input', { type: 'file', name: 'sampleFile' });
  const inputTypeSubmitUpload = createElement('input', { type: 'submit', value: 'upload' });

  const uploadForm = createElement(
    'form',
    { id: 'uploadForm', encType: 'multipart/form-data' },
    inputTypeFileUpload,
    inputTypeSubmitUpload
  );

  const inputTypeTextDownload = createElement('input', { type: 'text', name: 'sampleFile' });
  const inputTypeSubmitDownload = createElement('input', { type: 'submit', value: 'download' });

  const downloadForm = createElement(
    'form',
    { id: 'downloadForm', encType: 'multipart/form-data' },
    inputTypeTextDownload,
    inputTypeSubmitDownload
  );

  const mainAppWrapper = createElement(
    'div',
    { className: 'main-wrapper' },
    uploadForm,
    downloadForm
  );

  document.querySelector('.app').appendChild(mainAppWrapper);

  document.getElementById('uploadForm').onsubmit = function(e) {
    e.preventDefault();

    const form = new FormData();
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'multipart/form-data');
    form.append('sampleFile', e.target.sampleFile.files[0]);

    const req = new HttpRequest({ baseUrl: 'http://localhost:8000' });

    req.post('/upload', { responseType: 'blob', data: form })
      .then(data => console.log(data)); // eslint-disable-line
  };
}

document.addEventListener('DOMContentLoaded', createApp);
import { createElement } from './helpers/helper';
import HttpRequest from './helpers/HttpRequest';
import { onDownloadProgress, onUploadProgress } from './helpers/progress';
import { uploadFormView, downloadFormView, progressBarView } from './helpers/view';

function createApp() {
  const uploadForm = uploadFormView();
  const downloadForm = downloadFormView();
  const progressBar = progressBarView('progress-upload');

  uploadForm.appendChild(progressBar);

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

    req.post('/upload', { responseType: 'json', data: form, onUploadProgress })
      .then(data => console.log(data)); // eslint-disable-line
  };
}

document.addEventListener('DOMContentLoaded', createApp);
import {
  createElement
} from './helpers/utils';
import HttpRequest from './helpers/HttpRequest';
import { onDownloadProgress, onUploadProgress } from './helpers/progress';
import {
  createElementUploadFormView,
  createElementDownloadFormView,
  progressBarView,
  createListOfFiles
} from './helpers/view';

function createApp() {
  const uploadForm = createElementUploadFormView();
  const downloadForm = createElementDownloadFormView();
  const progressBarUpload = progressBarView('progress-upload', 'Upload');
  const progressBarDownload = progressBarView('progress-download', 'Download');

  // uploadForm.appendChild(progressBarUpload);
  // downloadForm.appendChild(progressBarDownload);

  const formWrapper = createElement(
    'div',
    { className: 'form-wrapper' },
    uploadForm,
    progressBarUpload,
    downloadForm,
    progressBarDownload
  );

  const itemsListHeader = createElement('h4', { className: 'items-list-header' }, 'Files on eDisk');
  const itemsList = createElement(
    'div',
    { className: 'items-wrapper' },
    itemsListHeader,
  );

  const mainAppWrapper = createElement(
    'div',
    { className: 'main-wrapper' },
    itemsList,
    formWrapper,
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
      .then(data => console.log(data.status)); // eslint-disable-line
  };

  createListOfFiles();
}

document.addEventListener('DOMContentLoaded', createApp);
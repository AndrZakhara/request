import { createElement } from './helpers/helper';

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
}

document.addEventListener('DOMContentLoaded', createApp);
import { createElement } from './helper';

export function progressBarView(elementClassName) {
  return createElement('div', { className: `progress ${elementClassName}` });
}

export function createElementUploadFormView() {
  const inputTypeFileUpload = createElement('input', { type: 'file', name: 'sampleFile' });
  const inputTypeSubmitUpload = createElement('input', { type: 'submit', value: 'upload' });

  const uploadForm = createElement(
    'form',
    { id: 'uploadForm', encType: 'multipart/form-data' },
    inputTypeFileUpload,
    inputTypeSubmitUpload
  );

  return uploadForm;
}

export function createElementDownloadFormView() {
  const inputTypeTextDownload = createElement('input', { type: 'text', name: 'sampleFile' });
  const inputTypeSubmitDownload = createElement('input', { type: 'submit', value: 'download' });

  const downloadForm = createElement(
    'form',
    { id: 'downloadForm', encType: 'multipart/form-data' },
    inputTypeTextDownload,
    inputTypeSubmitDownload
  );

  return downloadForm;
}
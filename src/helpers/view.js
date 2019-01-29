import { createElement } from './helper';

export function progressBarView(elementClassName) {
  const elementAllClasses = `progress ${elementClassName}`;
  const divProgress = createElement('div', { className: elementAllClasses });

  return divProgress;
}

export function uploadFormView() {
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

export function downloadFormView() {
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
// class view {
//   constructor() {
//
//   }
//
//   createUploadForm() {
//
//   }
//
// }
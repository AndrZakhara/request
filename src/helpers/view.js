import { createElement } from './utils';
import { getListOfItems } from './model';


export function progressBarView(elementClassName, processMessage) {
  const progressStatus = createElement('div', { className: `progress ${elementClassName}` });
  const progressNotificatione = createElement(
    'span',
    { className: 'progress-notificatione' },
    `${processMessage} progress: `
  );
  const progressWrapper = createElement(
    'div',
    { className: 'progress-wrapper' },
    progressNotificatione,
    progressStatus
  );

  return progressWrapper;
}

export function createElementUploadFormView() {
  const hendlerOnChangeSelectUploadFile = e => {
    e.preventDefault();
    console.log(e.target.files.item(0).name); // eslint-disable-line
    document.querySelector('.upload-file-name').innerHTML = e.target.files.item(0).name;
    document.querySelector('.progress').style.display = 'block';
    document.querySelector('.progress-notificatione').style.display = 'block';
  };

  const hendlerClickSelectUploadFile = e => {
    e.preventDefault();
    document.querySelector('.file-upload').click();
  };

  const inputTypeFileUpload = createElement('input', { className: 'file-upload', type: 'file', name: 'sampleFile' });

  inputTypeFileUpload.onchange = e => hendlerOnChangeSelectUploadFile(e);

  const inputTypeSubmitUpload = createElement('input', { className: 'form-button', type: 'submit', value: 'Upload' });
  const buttonSelectFile = createElement('button', { className: 'form-button select-button' }, 'Select file');

  buttonSelectFile.onclick = e => hendlerClickSelectUploadFile(e);

  const elementTextFileName = createElement('span', { className: 'upload-file-name' }, 'No file selected...');
  const uploadForm = createElement(
    'form',
    { id: 'uploadForm', encType: 'multipart/form-data' },
    buttonSelectFile,
    elementTextFileName,
    inputTypeFileUpload,
    inputTypeSubmitUpload
  );

  return uploadForm;
}

export function createElementDownloadFormView() {
  const inputTypeTextDownload = createElement('input', { type: 'text', name: 'sampleFile' });
  const inputTypeSubmitDownload = createElement(
    'input',
    {
      className: 'form-button',
      type: 'submit',
      value: 'download'
    }
  );

  const downloadForm = createElement(
    'form',
    { id: 'downloadForm', encType: 'multipart/form-data' },
    inputTypeTextDownload,
    inputTypeSubmitDownload
  );

  return downloadForm;
}

export function createListOfFiles() {
  const element = document.querySelector('.items-wrapper');
  const ulElement = createElement('ul', { className: 'items-list' });
  const reqest = getListOfItems();
  reqest
    .then(data => {
      data.response.forEach(el => {
        const liElement = createElement('li', {}, el);
        liElement.onclick = e => console.log(e.target.textContent); // eslint-disable-line
        ulElement.appendChild(liElement);
      });
    });
  element.appendChild(ulElement);
}
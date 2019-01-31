import { createElement } from '../helpers/utils';
import HttpRequest from '../libs/HttpRequest';
import { onUploadProgress } from './ProgressBar';

export default function createElementUploadForm() {
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

  uploadForm.onsubmit = function(e) {
    e.preventDefault();
    const form = new FormData();
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'multipart/form-data');
    form.append('sampleFile', e.target.sampleFile.files[0]);

    const req = new HttpRequest({ baseUrl: 'http://localhost:8000' });

    req.post('/upload', { responseType: 'json', data: form, onUploadProgress })
      .then(data => console.log(data.status)); // eslint-disable-line
  };

  return uploadForm;
}
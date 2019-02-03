import { createElement } from '../helpers/utils';
import request from '../libs/HttpRequest';
import { onUploadProgress } from './ProgressBar';
import observer from '../libs/observer';

function hendlerOnChangeSelectInput(e) {
  e.preventDefault();
  const { name } = e.target.files.item(0);
  const elementSelectForm = document.querySelector('.select-form-button');
  elementSelectForm.innerHTML = name;
  elementSelectForm.style.color = '#394c5e';

  document.querySelector('.progress-upload').style.display = 'block';
  document.querySelector('.btn-upload').disabled = false;
}

function hendlerClickSelectInput(e) {
  e.preventDefault();
  document.querySelector('.file-upload').click();
}

export default function createElementUploadForm() {
  const inputTypeFileUpload = createElement('input', { className: 'file-upload', type: 'file', name: 'sampleFile' });
  inputTypeFileUpload.onchange = e => hendlerOnChangeSelectInput(e);

  const inputTypeSubmitUpload = createElement(
    'input',
    {
      className: 'form-button btn-upload',
      disabled: 'true',
      type: 'submit',
      value: 'Upload'
    }
  );

  const buttonSelectFile = createElement('button', { className: 'select-form-button' }, 'Click to select file..');
  buttonSelectFile.onclick = e => hendlerClickSelectInput(e);

  const uploadForm = createElement(
    'form',
    { id: 'uploadForm', encType: 'multipart/form-data' },
    buttonSelectFile,
    inputTypeFileUpload,
    inputTypeSubmitUpload
  );

  uploadForm.onsubmit = function(e) {
    e.preventDefault();
    const form = new FormData();
    const [file] = e.target.sampleFile.files;

    buttonSelectFile.onclick = e => e.preventDefault();
    document.querySelector('.btn-upload').disabled = true;

    form.append('sampleFile', file);

    request.post('/upload', { responseType: 'json', data: form, onUploadProgress })
      .then(data => {
        buttonSelectFile.onclick = e => hendlerClickSelectInput(e);

        if (data.status === 200) {
          buttonSelectFile.textContent = 'File successfully uploaded';
          observer.broadcast({ status: 'upload sacsess', fileName: file });
        } else {
          buttonSelectFile.textContent = 'Upload was broken. Try again.';
        }
      });
  };

  return uploadForm;
}
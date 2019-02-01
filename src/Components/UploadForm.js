import { createElement } from '../helpers/utils';
import HttpRequest from '../libs/HttpRequest';
import { onUploadProgress } from './ProgressBar';
import observer from '../libs/observer';

export default function createElementUploadForm() {
  const hendlerOnChangeSelectInput = e => {
    e.preventDefault();
    const elementSelectForm = document.querySelector('.select-form-button');

    elementSelectForm.innerHTML = e.target.files.item(0).name;
    elementSelectForm.style.color = '#394c5e';

    document.querySelector('.progress').style.display = 'block';
    document.querySelector('.progress-notificatione').style.display = 'block';

    document.querySelector('.btn-upload').disabled = false;
  };

  const hendlerClickSelectInput = e => {
    e.preventDefault();
    document.querySelector('.file-upload').click();
  };

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
    const myHeaders = new Headers();
    const [file] = e.target.sampleFile.files;

    document.querySelector('.btn-upload').disabled = true;

    myHeaders.append('Content-Type', 'multipart/form-data');
    form.append('sampleFile', file);

    const req = new HttpRequest({ baseUrl: 'http://localhost:8000' });

    req.post('/upload', { responseType: 'json', data: form, onUploadProgress })
      .then(data => {
        console.log(data.status); // eslint-disable-line

        if (data.status === 200) {
          observer.broadcast({ status: 'upload sacsess', fileName: file });
        }
      });
  };

  return uploadForm;
}
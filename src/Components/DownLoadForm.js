import { createElement } from '../helpers/utils';
import request from '../libs/HttpRequest';
import { onDownloadProgress } from './ProgressBar';
import observer from '../libs/observer';
import appendImage from './MainImg';

let inputDownloadValue = null;
const elementInput = document.getElementsByClassName('text-input-download-form');
const btnDownload = document.getElementsByClassName('btn-download');

function handleData(data, fileName) {
  const fileURL = URL.createObjectURL(data);
  const { type } = data;

  if (type === 'image/png' || type === 'image/jpeg' || type === 'image/gif') {
    appendImage(fileURL);
  } else {
    const elementLink = document.createElement('a');
    elementLink.href = fileURL;
    elementLink.download = fileName;
    elementLink.click();
  }
}

function handlerOnchangeInput(e) {
  inputDownloadValue = e.target.value;
  btnDownload[0].disabled = false;

  if (elementInput[0].value === '') {
    observer.broadcast({ status: 'hide download progress' });
  } else {
    observer.broadcast({ status: 'show download progress' });
  }
}

function handlerEventDownload(status) {
  elementInput[0].value = null;
  elementInput[0].disabled = false;
  btnDownload[0].disabled = true;

  if (status === 200) {
    elementInput[0].placeholder = 'File successfully downloaded';
  } else {
    elementInput[0].placeholder = 'File not found. Try again.';
  }

  observer.broadcast({ status: 'download finished' });
}

function handlerEventSubmit(e) {
  e.preventDefault();
  elementInput[0].disabled = true;
  request.get(`/files/${inputDownloadValue}`, { responseType: 'blob', onDownloadProgress })
    .then(data => {
      handlerEventDownload(data.status);
      handleData(data.response, inputDownloadValue);
    })
    .catch(err => {
      handlerEventDownload(err);
    });
}

export default function createDownloadForm() {
  const inputTypeTextDownload = createElement(
    'input',
    {
      className: 'text-input-download-form',
      placeholder: 'Enter file name...',
      type: 'text',
      name: 'sampleFile'
    }
  );
  const inputTypeSubmitDownload = createElement(
    'input',
    {
      className: 'form-button btn-download',
      type: 'submit',
      value: 'Download',
      disabled: 'true'
    }
  );

  inputTypeTextDownload.onchange = e => handlerOnchangeInput(e);

  const downloadForm = createElement(
    'form',
    { id: 'downloadForm', encType: 'multipart/form-data' },
    inputTypeTextDownload,
    inputTypeSubmitDownload
  );

  downloadForm.onsubmit = e => handlerEventSubmit(e);

  return downloadForm;
}

observer.subscribe(mes => {
  if (mes.status === 'list item click') {
    const { fieldValue } = mes;
    elementInput[0].value = fieldValue;
    btnDownload[0].disabled = false;
    inputDownloadValue = fieldValue;
  }
});

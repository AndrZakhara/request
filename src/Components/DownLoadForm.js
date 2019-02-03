import { createElement } from '../helpers/utils';
import request from '../libs/HttpRequest';
import { onDownloadProgress } from './ProgressBar';

function appendImage(url) {
  const element = document.querySelector('.wrapper-download-img');
  const img = document.querySelector('.download-img');

  if (img) {
    img.src = url;
  } else {
    const img = document.createElement('img');
    img.src = url;
    img.className = 'download-img';
    element.appendChild(img);
  }
}

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

export default function createElementDownloadForm() {
  let inputDownloadValue = null;
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

  inputTypeTextDownload.onchange = e => {
    inputDownloadValue = e.target.value;
    inputTypeSubmitDownload.disabled = false;
    document.querySelector('.progress-download').style.display = 'block';
  };

  const handlerEventDownload = status => {
    const elementInput = document.querySelector('.text-input-download-form');
    elementInput.value = null;
    elementInput.disabled = false;
    inputTypeSubmitDownload.disabled = true;

    if (status === 200) {
      elementInput.placeholder = 'File successfully downloaded';
    } else {
      elementInput.placeholder = 'File not found. Try again.';
    }
    document.querySelector('.progress-download').style.setProperty('--progress-download-width', 0);
    document.querySelector('.progress-download').style.display = 'none';
  };

  const downloadForm = createElement(
    'form',
    { id: 'downloadForm', encType: 'multipart/form-data' },
    inputTypeTextDownload,
    inputTypeSubmitDownload
  );

  downloadForm.onsubmit = function(e) {
    e.preventDefault();
    document.querySelector('.text-input-download-form').disabled = true;
    request.get(`/files/${inputDownloadValue}`, { responseType: 'blob', onDownloadProgress })
      .then(data => {
        handlerEventDownload(data.status);
        handleData(data.response, inputDownloadValue);
      })
      .catch(err => {
        handlerEventDownload(err);
      });
  };

  return downloadForm;
}
import { createElement } from '../helpers/utils';
import HttpRequest from '../libs/HttpRequest';
import { onDownloadProgress } from './ProgressBar';

function appendImage(url) {
  const element = document.querySelector('.wrapper-download-img');
  const img = document.createElement('img');
  img.src = url;
  img.className = 'download-img';
  element.appendChild(img);
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
      type: 'text',
      name: 'sampleFile'
    }
  );
  const inputTypeSubmitDownload = createElement(
    'input',
    {
      className: 'form-button',
      type: 'submit',
      value: 'download'
    }
  );

  inputTypeTextDownload.onchange = e => {
    inputDownloadValue = e.target.value;
    // document.querySelector('.progress').style.display = 'block';
    // document.querySelector('.progress-notificatione-download').style.display = 'block';
  };

  const downloadForm = createElement(
    'form',
    { id: 'downloadForm', encType: 'multipart/form-data' },
    inputTypeTextDownload,
    inputTypeSubmitDownload
  );

  downloadForm.onsubmit = function(e) {
    e.preventDefault();
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'multipart/form-data');

    const req = new HttpRequest({ baseUrl: 'http://localhost:8000' });
    req.get(`/files/${inputDownloadValue}`, { responseType: 'blob', onDownloadProgress })
      .then(data => {
        const { type } = data.response;
        console.log(data.response.type); // eslint-disable-line

        handleData(data.response, inputDownloadValue);
        // if (type === 'image/png' || type === 'image/jpeg' || type === 'image/gif') {
        //   appendImage(data.response)
        // } else {
        //   downloadFile(data.response, inputDownloadValue);
        // }
      });
  };

  return downloadForm;
}
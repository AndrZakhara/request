import { createElement } from '../helpers/utils';
import HttpRequest from '../libs/HttpRequest';
import { onDownloadProgress } from './ProgressBar';

function downloadFile(data, fileName) {
  const elementLink = document.createElement('a');
  const fileURL = URL.createObjectURL(data);
  elementLink.href = fileURL;
  elementLink.download = fileName;
  elementLink.click();
}

// function appendImage(url) {
//   const node = document.querySelector('.download-img');
//
//   if (node) {
//     node.src = url;
//   } else {
//     const img = document.createElement('img');
//     img.src = url;
//     img.className = 'download-img';
//     document.body.appendChild(img);
//   }
// }

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
        console.log(data.response); // eslint-disable-line
        downloadFile(data.response, inputDownloadValue);
      });
  };

  return downloadForm;
}
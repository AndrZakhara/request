export function onDownloadProgress(e) {
  const width = Math.floor(e.loaded / e.total * 100);
  const element = document.querySelector('.progress-download');

  element.style.setProperty('--progress-download-width', width);
}

export function onUploadProgress(e) {
  const width = Math.floor(e.loaded / e.total * 100);
  const element = document.querySelector('.progress-upload');

  element.style.setProperty('--progress-upload-width', width);
}


//
// document.getElementById('downloadForm').onsubmit = function(e) {
//   e.preventDefault();
//
//   const reuest = new HttpRequest({  // eslint-disable-line
//     baseUrl: 'http://localhost:8000'
//   });
//
//   const downloadUrl = 'http://localhost:8000/files/IMG_0081.JPG';
//   appendImage(downloadUrl); //eslint-disable-line
//   downloadFile(downloadUrl, 'IMG_0081.JPG'); //eslint-disable-line
// };



// import HttpRequest from './HttpRequest';
//
// const req = new HttpRequest({ baseUrl: 'http://localhost:8000' });
//
// console.log(req);

// document.getElementById('uploadForm').onsubmit = function(e) {
//   e.preventDefault();
//   const form = new FormData();
//   const myHeaders = new Headers();
//   myHeaders.append('Content-Type', 'multipart/form-data');
//   form.append('sampleFile', e.target.sampleFile.files[0]);
//
//   fetch('http://localhost:8000/upload', {
//     method: 'POST',
//     body: form
//   });
// };
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



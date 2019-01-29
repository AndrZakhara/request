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


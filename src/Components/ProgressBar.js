import { createElement } from '../helpers/utils';

export function onDownloadProgress(event) {
  const width = Math.floor(event.loaded / event.total * 100);
  const element = document.querySelector('.progress-download');

  element.style.setProperty('--progress-download-width', width);
}

export function onUploadProgress(e) {
  const width = Math.floor(e.loaded / e.total * 100);
  const element = document.querySelector('.progress-upload');

  element.style.setProperty('--progress-upload-width', width);
}

export function progressBar(processMessage) {
  const elementClassName = processMessage === 'Upload'
    ? 'progress-upload'
    : 'progress-download';

  const progressStatus = createElement('div', { className: `progress ${elementClassName}` });
  const progressNotificatione = createElement(
    'span',
    { className: 'progress-notificatione' },
    `${processMessage} progress: `
  );
  const progressWrapper = createElement(
    'div',
    { className: 'progress-wrapper' },
    progressNotificatione,
    progressStatus
  );

  return progressWrapper;
}
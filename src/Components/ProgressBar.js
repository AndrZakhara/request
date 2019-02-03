import { createElement } from '../helpers/utils';

export function onDownloadProgress(event) {
  const loadValue = Math.floor(event.loaded / event.total * 100);
  const element = document.querySelector('.progress-download');
  const title = document.querySelector('title');

  element.style.setProperty('--progress-download-width', loadValue);
  title.innerHTML = `${loadValue}% eDisk`;
}

export function onUploadProgress(e) {
  const loadValue = Math.floor(e.loaded / e.total * 100);
  const element = document.querySelector('.progress-upload');

  element.style.setProperty('--progress-upload-width', loadValue);
}

export function progressBar(processMessage) {
  const elementClassName = processMessage === 'upload'
    ? 'progress-upload'
    : 'progress-download';

  const progressStatus = createElement('div', { className: `progress ${elementClassName}` });
  const progressWrapper = createElement(
    'div',
    { className: `progress-wrapper-${processMessage}` },
    progressStatus
  );

  return progressWrapper;
}
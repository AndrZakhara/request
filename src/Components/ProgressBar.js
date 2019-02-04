import { createElement } from '../helpers/utils';
import observer from '../libs/observer';

export function onDownloadProgress(event) {
  const loadValue = Math.floor(event.loaded / event.total * 100);
  const element = document.querySelector('.progress-download');
  const title = document.querySelector('title');

  element.style.setProperty('--progress-download-width', loadValue);
  title.innerHTML = `${loadValue}% eDisk`;
}

export function onUploadProgress(event) {
  const loadValue = Math.floor(event.loaded / event.total * 100);
  const element = document.querySelector('.progress-upload');

  element.style.setProperty('--progress-upload-width', loadValue);
}

export function progressBar(processMessage) {
  const elementClassName = processMessage === 'upload'
    ? 'progress-upload'
    : 'progress-download';

  const progressStatus = createElement('div', { className: `progress ${elementClassName}` });

  return createElement(
    'div',
    { className: `progress-wrapper-${processMessage}` },
    progressStatus
  );
}

observer.subscribe(mes => {
  if (mes.status === 'upload finished') {
    const elemProgress = document.querySelector('.progress-upload');
    elemProgress.style.setProperty('--progress-upload-width', 0);
    elemProgress.style.display = 'none';
  } else if (mes.status === 'download finished') {
    const elemProgress = document.querySelector('.progress-download');
    elemProgress.style.setProperty('--progress-download-width', 0);
    elemProgress.style.display = 'none';
  }
});

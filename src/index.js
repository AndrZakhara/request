import {
  createElement
} from './helpers/utils';

import { createListOfFiles, addItems } from './Components/ListOfItems';
import createMainForm from './Components/FormWrapper';
import observer from './libs/observer';

function checkItemfromList(pearentNodeSelector, checkedElement) {
  const list = document.querySelector(pearentNodeSelector).childNodes;
  const isElementInList = Array.from(list).map(elem => elem.textContent);

  if (isElementInList.indexOf(checkedElement) !== -1) {
    return true;
  } else {
    return false;
  }
}

function createApp() {
  observer.subscribe(mes => {
    const { name } = mes.fileName;

    if (mes.status === 'upload sacsess') {
      if (!checkItemfromList('.items-list', name)) {
        const liElement = createElement('li', {}, mes.fileName.name);
        document.querySelector('.items-list').appendChild(liElement);
      }

      const elemProgress = document.querySelector('.progress-upload');
      elemProgress.style.setProperty('--progress-upload-width', 0);
      elemProgress.style.display = 'none';
    }
  });

  const mainForm = createMainForm();
  const filesList = createListOfFiles();
  const mainImgDiv = createElement('div', { className: 'wrapper-download-img' });

  const mainAppWrapper = createElement(
    'div',
    { className: 'main-wrapper' },
    filesList,
    mainForm,
    mainImgDiv
  );

  document.querySelector('.app').appendChild(mainAppWrapper);
}

document.addEventListener('DOMContentLoaded', createApp);
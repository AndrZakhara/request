import {
  createElement
} from './helpers/utils';

import { createListOfFiles, addItems } from './Components/ListOfItems';
import createMainForm from './Components/FormWrapper';
import EventObserver from './libs/observer';

function createApp() {
  const observer = new EventObserver();

  observer.subscribe(mes => {
    if (mes.status === 'upload sacsess') {
      const liElement = createElement('li', {}, mes.fileName.name);
      document.querySelector('.items-list').appendChild(liElement);
    }
  });

  const mainForm = createMainForm(observer);
  const filesList = createListOfFiles(observer);
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
import {
  createElement
} from './helpers/utils';

import createListOfFiles from './Components/ListOfItems';
import createMainForm from './Components/FormWrapper';

function createApp() {
  const mainForm = createMainForm();
  const filesList = createListOfFiles();

  const mainAppWrapper = createElement(
    'div',
    { className: 'main-wrapper' },
    filesList,
    mainForm,
  );

  document.querySelector('.app').appendChild(mainAppWrapper);
}

document.addEventListener('DOMContentLoaded', createApp);
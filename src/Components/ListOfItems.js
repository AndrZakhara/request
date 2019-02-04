import request from '../libs/HttpRequest';
import { createElement } from '../helpers/utils';
import observer from '../libs/observer';

function getListOfItems() {
  return request.get('/list', { responseType: 'json' });
}

function checkItemfromList(pearentNodeSelector, checkedElement) {
  const list = document.querySelector(pearentNodeSelector).childNodes;
  const isElementInList = Array.from(list).map(elem => elem.textContent);

  if (isElementInList.indexOf(checkedElement) !== -1) {
    return true;
  } else {
    return false;
  }
}

export function createListOfFiles() {
  const itemsListHeader = createElement('h4', { className: 'items-list-header' }, 'Files on eDisk');
  const ulElement = createElement('ul', { className: 'items-list' });
  const createReqest = getListOfItems();

  createReqest
    .then(data => {
      data.response.forEach(el => {
        const liElement = createElement('li', {}, el);
        liElement.onclick = e => {
          observer.broadcast({ status: 'list item click', fieldValue: e.target.textContent });
        };
        ulElement.appendChild(liElement);
      });
    });

  const itemsList = createElement(
    'div',
    { className: 'items-wrapper' },
    itemsListHeader,
    ulElement
  );

  return itemsList;
}

observer.subscribe(mes => {
  if (mes.status === 'upload sacsess') {
    const { name } = mes.fileName;

    if (!checkItemfromList('.items-list', name)) {
      const liElement = createElement('li', {}, mes.fileName.name);
      liElement.onclick = e => {
        observer.broadcast({ status: 'list item click', fieldValue: e.target.textContent });
      };
      document.querySelector('.items-list').appendChild(liElement);
    }
  }
});

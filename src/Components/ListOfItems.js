import HttpRequest from '../libs/HttpRequest';
import { createElement } from '../helpers/utils';

function getListOfItems() {
  const req = new HttpRequest({ baseUrl: 'http://localhost:8000' });

  return req.get('/list', { responseType: 'json' });
}

export function createListOfFiles() {
  const itemsListHeader = createElement('h4', { className: 'items-list-header' }, 'Files on eDisk');
  const ulElement = createElement('ul', { className: 'items-list' });
  const reqest = getListOfItems();

  reqest
    .then(data => {
      data.response.forEach(el => {
        const liElement = createElement('li', {}, el);
        liElement.onclick = e => console.log(e.target.textContent); // eslint-disable-line
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
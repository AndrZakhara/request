import HttpRequest from './HttpRequest';

export function getListOfItems() {
  const req = new HttpRequest({ baseUrl: 'http://localhost:8000' });

  return req.get('/list', { responseType: 'json' });
}
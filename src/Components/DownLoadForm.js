import { createElement } from '../helpers/utils';

export default function createElementDownloadForm() {
  const inputTypeTextDownload = createElement(
    'input',
    {
      className: 'text-input-download-form',
      type: 'text',
      name: 'sampleFile'
    }
  );
  const inputTypeSubmitDownload = createElement(
    'input',
    {
      className: 'form-button',
      type: 'submit',
      value: 'download'
    }
  );

  const downloadForm = createElement(
    'form',
    { id: 'downloadForm', encType: 'multipart/form-data' },
    inputTypeTextDownload,
    inputTypeSubmitDownload
  );

  return downloadForm;
}
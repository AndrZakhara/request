import { createElement } from '../helpers/utils';

import { progressBar } from './ProgressBar';
import createElementUploadForm from './UploadForm';
import createElementDownloadForm from './DownLoadForm';

export default function createMainForm() {
  const uploadForm = createElementUploadForm();
  const downloadForm = createElementDownloadForm();
  const progressBarUpload = progressBar('Upload');
  const progressBarDownload = progressBar('Download');
  const uploadFormTitle = createElement('h2', { className: 'form-title' }, 'Add file to eDisk');
  const downloadFormTitle = createElement('h2', { className: 'form-title' }, 'Download file from eDisk');

  return createElement(
    'div',
    { className: 'form-wrapper' },
    uploadFormTitle,
    uploadForm,
    progressBarUpload,
    downloadFormTitle,
    downloadForm,
    progressBarDownload
  );
}


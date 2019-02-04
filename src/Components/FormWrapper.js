import { createElement } from '../helpers/utils';

import { progressBar } from './ProgressBar';
import createUploadForm from './UploadForm';
import createDownloadForm from './DownLoadForm';

export default function createMainForm() {
  const uploadForm = createUploadForm();
  const downloadForm = createDownloadForm();
  const progressBarUpload = progressBar('upload');
  const progressBarDownload = progressBar('download');
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


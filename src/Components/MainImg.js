export default function appendImage(url) {
  const element = document.querySelector('.wrapper-download-img');
  const img = document.querySelector('.download-img');

  if (img) {
    img.src = url;
  } else {
    const img = document.createElement('img');
    img.src = url;
    img.className = 'download-img';
    element.appendChild(img);
  }
}
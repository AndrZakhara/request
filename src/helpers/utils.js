export function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.keys(props).forEach(key => (element[key] = props[key]));

  children.forEach(child => {
    let node = child;

    if (typeof child === 'string') {
      node = document.createTextNode(child);
    }

    element.appendChild(node);
  });

  return element;
}
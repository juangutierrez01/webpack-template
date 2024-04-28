import * as _ from 'lodash';
import Print from './print';

function component(): HTMLElement {
  const element: HTMLDivElement = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.appendChild((() => {
    const btn: HTMLButtonElement = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
    btn.addEventListener('click', () => Print('Hello webpack'));

    return btn;
  })());

  return element;
}

document.body.appendChild(component());
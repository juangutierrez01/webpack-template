import * as _ from 'lodash';
import Print from './print';

function component(): HTMLElement {
  const element: HTMLDivElement = document.createElement('div');
  const btn: HTMLButtonElement = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  console.log(element.innerHTML);

  btn.innerHTML = 'Click me and check the console!';
  btn.addEventListener('click', () => Print('Hello webpack'));

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
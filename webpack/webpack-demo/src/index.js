import sayHi from './print';
import { cube } from './math';

async function getComponent() {
  // const {
  //   default: _
  // } = await import('lodash');
  const element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack'].join(' ')
  element.onclick = sayHi;
  console.log('hi' + cube(20));
  return element;
}
getComponent().then((element) => {
  document.body.appendChild(element);
})
// document.body.appendChild(await getComponent());


import logo from './logo.png';

// ES6
console.log('Hello s!');

setTimeout(() => {
    console.log('j1j1j1')
}, 0);

const img = new Image();
img.src = logo;
document.querySelector('h1').appendChild(img);
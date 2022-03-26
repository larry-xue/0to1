import logo from './logo.png';
// import './index.css';
import './index.scss'

// ES6
setTimeout(() => {
    console.log('j1j1j1')
}, 0);

const img = new Image();
img.src = logo;
document.querySelector('h1').appendChild(img);
import logo from './logo.png';
import styles from './index.scss' // 全局映入，会影响其他模块的样式
import createAvatar from './createAvatar';
import axios from 'axios';

// ES6
setTimeout(() => {
    console.lfog('j1j1j1')
}, 0);

// console.log(styles);

createAvatar();

const img = new Image();
img.className += `${styles.avatar}`;
img.src = logo;
document.querySelector('h1').appendChild(img);

axios.get('/test/api/breeds/image/random')
    .then(res => {
        console.log(res);
    })
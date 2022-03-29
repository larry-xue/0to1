import logo from './logo.png'

function createAvatar() {
    const img = new Image();
    img.src = logo;
    document.querySelector('h1').appendChild(img);
}

export default createAvatar;
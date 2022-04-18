const imgs = [
    `./img/me1.jpg`,
    `./img/me2.jpg`,
    `./img/me3.jpg`,
    `./img/me0.jpg`,
]

let cnt = 1;
const img = document.querySelector('img');
const btns = document.querySelectorAll('button');

function createIntervel() {
    return setInterval(() => {
        console.log('in')
        img.src = imgs[cnt];
        cnt = (cnt + 1) % imgs.length;
    }, 2000)
}
let timeid = createIntervel();

// left 
btns[0].addEventListener('click', () => {
    clearInterval(timeid);
    cnt = (cnt - 1 + imgs.length) % imgs.length;
    img.src = imgs[cnt];
    timeid = createIntervel();
})

btns[1].addEventListener('click', () => {
    clearInterval(timeid);
    cnt = (cnt + 1) % imgs.length;
    img.src = imgs[cnt];
    timeid = createIntervel();
})
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener('click', e => {
    // console.log(e);
    console.log('1 & ' + e.target.className);
})

// parent.addEventListener('click', e => {
//     console.log('2');
// })

child.addEventListener('click', e => {
    console.log('3');
    console.log(e);
    // console.log(e.path);
}, { capture: true }) // 在捕获阶段就执行，不需要到冒泡阶段

document.addEventListener('click', e => {
    console.log('document')
})
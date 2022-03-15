const ball = document.querySelector('#ball');
const field = document.getElementById('field');
// const radius = img.attributes.height.value;

field.addEventListener('click', (e) => {
    const fieldRect = field.getBoundingClientRect();
    let x = e.clientY - fieldRect.top - ball.clientWidth / 2;
    let y = e.clientX - fieldRect.left - ball.clientHeight / 2;

    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;

    x = x - ball.clientHeight > field.clientHeight ? field.clientHeight - ball.clientHeight / 2 : x;
    y = y > field.clientWidth ? field.clientWidth - ball.clientWidth / 2 : y;

    console.log(field.clientHeight, field.clientWidth)
    console.log(x, y);

    ball.style.top = `${x}px`;
    ball.style.left = `${y}px`;
})
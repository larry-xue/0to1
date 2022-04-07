/**
 * for await...of 的区别
 */

function createPromise(val) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(val);
        }, 2000);
    });
}

(async function() {
    const p1 = createPromise(100);
    const p2 = createPromise(200);
    const p3 = createPromise(300);

    const list = [p1, p2, p3];

    // Promise.all(list)
    //     .then(res => console.log(res));
    // Promise.all 的替代
    for await (let res of list) {
        console.log(res);
    }


})();
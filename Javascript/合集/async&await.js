async function bb() {
    console.log('1');
    // await不能单独使用
    let two = await Promise.resolve('2');
    console.log(two)
    console.log(3);
    return Promise.resolve('hello world');
}

// bb().then(res => console.log(res));


// 优化fetch
const bb2 = async() => {
    const url = 'https://dog.ceo/api/breeds/image/random'

    let responce = await Promise.all(
        [fetch(url), fetch(url), fetch(url)]
    )

    let jsons = responce.map(responce => responce.json())

    let values = await Promise.all(jsons)

    console.log(values);
}

// bb2();
// await后面的函数是立即执行的，但是会等到执行结束后再返回
// 如果await的函数没有异步操作，那么就和正常函数相同

async function async1() {
    console.log('async 1 start');
    const res = await async2();
    console.log(res);
    console.log('async 1 end');
}

async function async2() {
    return new Promise((resolve) => {
        console.log('async 2');
        resolve('world');
    })
}

async1();
console.log('hello')
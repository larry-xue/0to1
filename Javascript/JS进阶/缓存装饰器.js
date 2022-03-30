function slow(x) {
    // 假定slow函数运行非常耗时
    console.log(`cpu ... working ... with ${x}`);
    return x;
}


/**
 * 装饰器1
 * @param {*} fn 
 * @returns {function}
 */
function Decrator1(fn) {
    let cache = new Map();
    return function(x) {
        let result = cache.get(x);
        if (result) {
            console.log('use cahce!');
        } else {
            console.log('do not use cache!');
            result = fn(x);
            cache.set(x, result);
        }
        return result;
    }
}

const decSlow = Decrator1(slow);
decSlow(1);
decSlow(1);
decSlow(2);
decSlow(3);
decSlow(3);

// 目前为止我们实现的装饰器不能装饰对象中的方法
const worker = {
    slow(x) {
        console.log('in obj slow')
            // this最终指向的是调用它的对象，这里的函数a实际是被globalThis对象所点出来的
            // this永远指向最后调用它的对象，箭头函数除外
        console.log(this === globalThis) // true
        return x * this.someMethod();
    },
    someMethod() {
        return 1;
    }
}

// 使用装饰器装饰
// worker.slow = Decrator1(worker.slow);
// console.log(worker.slow(2)); // this.someMethod is not a function
// 上面的报错是因为Decrator中调用slow，此时slow函数内部的this指向是undefined

/**
 * 装饰器2
 * @param {*} fn 
 * @returns {function}
 */
function Decrator2(fn) {
    let cache = new Map();
    return function(x) {
        let result = cache.get(x);
        if (result) {
            console.log('use cahce!');
        } else {
            console.log('do not use cache!');
            result = fn.call(this, x);
            cache.set(x, result);
        }
        return result;
    }
}

worker.slow = Decrator2(worker.slow);
console.log(worker.slow(2)); // 2

// 上面的装饰器到目前为止还不能处理多个参数的情况
// 可以使用hash函数来将多个参数组成一个key
/**
 * 装饰器3
 * @param {*} fn 
 * @returns {function}
 */
function Decrator3(fn) {
    let cache = new Map();
    return function() {
        const key = hash(arguments)
        let result = cache.get(key);
        if (result) {
            console.log('use cahce!');
        } else {
            console.log('do not use cache!');
            result = fn.call(this, ...arguments);
            cache.set(key, result);
        }
        return result;
    }
}


/**
 * hash映射唯一key
 * @param {*} args 
 * @returns {string}
 */
function hash(args) {
    // arguments 对象既是可迭代对象又是类数组对象，但它并不是真正的数组
    // const arr = Array.from(args);
    // console.log('arr = ', arr)
    // return arr.reduce((pre, val) => `${pre},${val}`, '');

    // hash函数更简便的写法
    return [].join.call(arguments) // 这种方法称为：JavaScript方法借用
}

const worker3 = {
    slow(x, y) {
        console.log('in obj slow')
            // this最终指向的是调用它的对象，这里的函数a实际是被globalThis对象所点出来的
            // this永远指向最后调用它的对象，箭头函数除外
        console.log(this === globalThis) // true
        return (x + y) * this.someMethod();
    },
    someMethod() {
        return 1;
    }
}

worker3.slow = Decrator3(worker3.slow);
console.log(worker3.slow(2, 3));
console.log(worker3.slow(3, 3));
console.log(worker3.slow(2, 3));
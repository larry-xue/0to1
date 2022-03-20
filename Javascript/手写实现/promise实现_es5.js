// resolve 和 reject 是 Promise 内部实现的方法 
// 基本结构 -> resolve & reject -> then -> 立即执行

function myPromise(executor) {
    const self = this;
    self.status = 'PENDING';
    self.value = null;
    self.reason = null;
    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = [];

    function resolve(data) {
        console.log(data);
        if (self.status === 'PENDING') {
            self.status = 'RESOLVE';
            self.value = data;
            // 之前我担心遍历执行回调的时候会把data传给不属于这个onFulfilled的函数
            // 但是转念一想，一个Promise只会保存一个onFulfilled 和一个 onRejected
            self.onFulfilledCallbacks.forEach(fulfilled => fulfilled(data));
        }
    }

    function rejected(err) {
        if (self.status === 'PENDING') {
            self.status = 'REJECTED';
            self.reason = err;
            self.onRejectedCallbacks.forEach((onRejected => onRejected(err)));
        }
    }

    try {
        executor && executor(resolve, rejected);
    } catch (e) {
        throw (e);
    }
}

myPromise.prototype.then = function (onFulfilled, onRejected) {
    const self = this;
    // 这么写为什么无法实现then方法的值穿透
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw (err) };
    return new myPromise((resolve, reject) => {
        if (self.status === 'RESOLVE') {
            setTimeout(() => {
                try {
                    const res = onFulfilled(self.value);
                    resolve(res);
                } catch (err) {
                    reject(err);
                }
            })
        } else if (self.status === 'REJECTED') {
            setTimeout(() => {
                try {
                    const res = onRejected(self.reason);
                    resolve(res);
                } catch (err) {
                    reject(err);
                }
            })
        } else if (self.status === 'PENDING') {
            // 暂存回调函数
            // 这一部分不太清楚
            self.onFulfilledCallbacks.push(onFulfilled);
            self.onRejectedCallbacks.push(onRejected);
        }
    })
}

const demo = new myPromise((resolve, reject) => {
    console.log('in demo promise');
    // setTimeout(() => {
    //     resolve([1, 2, 3]);
    // }, 2000);
    resolve([1, 2, 3]);
})

demo.then((res) => {
    console.log('first then: ' + res);
    return 'azoux';
}).then(
    res => {
        console.log(res);
        return 'gogogogo';
}).then().then(
        (res) => {
            console.log('in new promise resolved')
            console.log(res);
        },
        (err) => {
            console.log('rejected: ' + err);
        }
    )

console.log('step one');

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
        if (self.status === 'PENDING') {
            self.status = 'RESOLVE';
            self.value = data;
            // 之前我担心遍历执行回调的时候会把data传给不属于这个onFulfilled的函数
            // 但是转念一想，一个Promise只会保存一个onFulfilled 和一个 onRejected
            self.onFulfilledCallbacks.forEach((onFulfilled => onFulfilled(data)));
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
    return new myPromise((resolve, reject) => {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => {};
        onRejected = typeof onRejected === 'function' ? onRejected : () => {};

        const self = this;
        if (self.status === 'RESOLVE') {
            setTimeout(() => {
                onFulfilled(self.value);
            })
        } else if (self.status === 'REJECTED') {
            setTimeout(() => {
                onRejected(self.reason);
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
    console.log('1');
    setTimeout(() => {
        resolve([1, 2, 3]);
    }, 2000);
})

demo.then((res) => {
    console.log(res);
}).then((res) => {
    console.log(res);
})





class myPromise {
    static PENDING = '等待';
    static FULFILLED = '解决';
    static REJECTED = '拒绝';
    constructor(executor) {
        this.status = myPromise.PENDING;
        this.value = null;
        this.callbacks = [];
        try {
            executor && executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (err) {
            this.reject(err);
        }
    }

    resolve(data) {
        // 为什么我在这里加上setTimeout就会出现then无法向下传递的情况？
        if (this.status === myPromise.PENDING) {
            this.status = myPromise.FULFILLED;
            this.value = data;
            setTimeout(() => {
                this.callbacks.forEach((callback) => {
                    console.dir(callback.onFulfilled);
                    const res = callback.onFulfilled(this.value);
                    console.log('res = ' + res);
                })
            })
        }
    }

    reject(reason) {
        if (this.status === myPromise.PENDING) {
            this.status = myPromise.REJECTED;
            this.value = reason;
            setTimeout(() => {
                this.callbacks.forEach((callback) => {
                    callback.onRejected(this.value);
                })
            })
        }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => this.value;
        onRejected = typeof onRejected === 'function' ? onRejected : () => { throw this.value; };

        return new myPromise((resolve, reject) => {
            if (this.status === myPromise.FULFILLED) {
                // 为什么这里需要使用setTimeout
                // 通过对比发现，如果这里不适用setTimeout，那么then方法是同步执行的，不会等到状态改变后再执行
                setTimeout(() => {
                    try {
                        const result = onFulfilled(this.value);
                        resolve(result);
                    } catch (err) {
                        onRejected(err);
                    }
                })
            }

            if (this.status === myPromise.REJECTED) {
                setTimeout(() => {
                    try {
                        const result = onRejected(this.value);
                        reject(result);
                    } catch (err) {
                        onRejected(err);
                    }
                })
            }

            if (this.status === myPromise.PENDING) {
                this.callbacks.push({
                    onFulfilled,
                    onRejected
                });
            }
        })
    }
}

const demo = new myPromise((resolve, reject) => {
    console.log('第一步')
    resolve('第二步');
}).then(
    res => {
        console.log('onfulfilled: ' + res);
        return 'yoyoyo';
    },
    err => {
        console.log(err);
    }
)
.then()
.then((res) => {
    console.log('second : ' + res);
})

// console.log(demo);

// new Promise((resolve, reject) => {
//     console.log('第一步')
//     resolve('第二步');
// }).then(
//     res => {
//         console.log('onfulfilled: ' + res);
//         return 'yoyoyo';
//     },
//     err => {
//         console.log(err);
//     }
// )
// .then()
// .then((res) => {
//     console.log('second : ' + res);
// })
console.log('第三步')

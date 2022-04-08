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
                    callback.onFulfilled(this.value);
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

    static resolve(val) {
        if (val instanceof myPromise) {
            return val;
        } else {
            return new myPromise((resolve, reject) => {
                // 这里的this是指向何处？
                resolve(val);
            })
        }
    }

    static reject(val) {
        return new myPromise((resolve, reject) => {
            reject(val);
        })
    }

    static all(promises) {
        const values = [];
        return new myPromise((resolve, reject) => {
            promises.forEach(p => {
                p.then(res => {
                        values.push(res);
                        if (values.length === promises.length) resolve(values);
                    },
                    err => {
                        reject(err);
                    });
            });
        });
    }

    static race(promises) {
        return new myPromise((resolve, reject) => {
            promises.forEach((p) => {
                p.then(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
            })
        })
    }
}


const p1 = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('123');
    }, 1000);
})

const p2 = new myPromise((resolve) => {
    setTimeout(() => {
        resolve('456');
    }, 1000);
})

myPromise.all([p1, p2]).then(
    res => {
        console.log(res);
    },
    err => {
        console.log(err);
    }
)

myPromise.race([p1, p2]).then(
    res => {
        console.log(res);
    },
    err => {
        console.log(err);
    }
)

// const demo = new myPromise((resolve, reject) => {
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
// console.log('第三步')

// const test = new myPromise((resolve) => {
//     console.log('in test');
//     resolve('success!');
// })

// myPromise.resolve(test).then((res) => {
//     setTimeout(() => {
//         console.log(res);
//     }, 0);
//     return '1212322';
// }).then((res) => {
//     console.log(res);
// })

// myPromise.reject('any way').then(null, err => {
//     console.log(err);
// })


// 原生promise
// Promise.resolve(new Promise(resolve => {
//     resolve('success promise');
// })).then((res) => {
//     console.log('in origin');
//     console.log(res);
// })

// Promise.reject('error').then(null, err => {
//     console.log(err);
// })

const pp1 = Promise.resolve(1);
const pp2 = Promise.reject(2);
const pp3 = Promise.resolve(3);

const list = [pp1, pp2, pp3];

Promise.all(list).then(res => {
    console.log(res);
})
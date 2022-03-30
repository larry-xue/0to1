function delay(f, ms) {
    return function(...args) {
        // 注意这里setTimeout中的回调是使用箭头函数，因此不用额外保存this指向
        setTimeout(() => {
            f.call(this, ...args);
        }, ms)
    }
}
function throttle(fn, ms) {
    let isThrottle = false,
        saveThis,
        saveArgs;

    function wrapper(...args) {
        if (isThrottle) {
            saveArgs = args;
            saveThis = this;
            return; // very important!! // (1)
        }
        isThrottle = true;
        fn.apply(this, args); // (2)
        setTimeout(() => {
            isThrottle = false;
            // 注意这里调用的是wrapper
            if (saveArgs) { // (3)  这里需要判断
                wrapper.apply(saveThis, saveArgs); // (4) 这里需要调用包装后的，而不是原函数。因为我们需要重置定时器，设置保护期，具体例子可以看下面
                // fn.apply(saveThis, saveArgs); // (4) 这里需要调用包装后的，而不是原函数
                saveThis = saveArgs = null;
            }
        }, ms);
    }

    return wrapper;
}

// 卡壳的地方：(1) (2) (3) (4)

const conso = throttle(console.log, 1000);
conso(1);
conso(2);
setTimeout(() => {
    conso(3);
}, 1000)
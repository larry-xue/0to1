/**
 * 两者的区别
 */

/**
 * 防抖函数（赛车，输入）
 * @param {function} fn 
 * @param {number} delay 
 * @returns {function}
 */
function debounce(fn, delay = 1000) {
    let t = null;
    return function() {
        clearTimeout(t);
        setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}


/**
 * 节流函数（一个个来）
 * @param {function} fn 
 * @param {number} delay 
 * @returns {function}
 */
function throttle(fn, delay = 200) {
    let t = null;
    return function() {
        if (t) return;
        t = setTimeout(() => {
            fn.apply(this, arguments);
            t = null;
        }, delay);
    }
}

// 立即执行
function firstThrottle(fn, delay = 200) {
    let t = null;
    let first = true;
    return function() {
        if (t) return;
        if (first) {
            fn.apply(this, arguments);
            first = false;
            t = setTimeout(() => first = true, delay);
        }
    }
}
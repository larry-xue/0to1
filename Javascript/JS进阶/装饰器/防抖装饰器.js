function debounce(f, ms) {
    let timeid = null;
    return function(...args) {
        if (timeid) clearTimeout(timeid);
        timeid = setTimeout(() => {
            f.apply(this, args);
            timeid = null;
        }, ms)
    }
}

// 优化一下
function debounce2(f, ms) {
    let timeid;
    return function(...args) {
        clearTimeout(timeid);
        timeid = setTimeout(() => f.apply(this, args), ms)
    }
}
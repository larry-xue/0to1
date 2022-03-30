// 间谍装饰器

function spy(func) {
    // your code
    function fn() {
        fn.calls.push([...arguments]);
        return func.call(this, ...arguments);
    }

    fn.calls = [];
    return fn;
}
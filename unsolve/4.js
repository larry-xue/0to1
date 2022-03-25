/**
写一个函数 sum， 它有这样的功能：

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
*/

function sum(a) {
    let curValue = a;

    function f(b) {
        curValue = b + a;
        return f;
    }

    f.toString = function() {
        console.log('in to String');
        return curValue;
    }

    return f;
}

console.log(sum(0)(1)(2)(3)(4)(5));
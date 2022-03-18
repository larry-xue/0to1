// 可思考：如何让 a==1&&a==2&&a==3的值为true？
// 基于上述的知识点：

var a = { value: 0 };
a[Symbol.toPrimitive] = function(hint) {
    console.log(hint); // default
    return this.value += 1;
}
console.log(a == 1 && a == 2 && a == 3); // true


var a = { value: 0 };
a.valueOf = function() {
    return this.value += 1;
};
console.log(a == 1 && a == 2 && a == 3); // true


var a = { value: 0 };
a.toString = function() {
    return this.value += 1;
};
console.log(a == 1 && a == 2 && a == 3); // true
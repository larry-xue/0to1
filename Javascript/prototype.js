// 本文件用于学习原型
let obj = new Object();
let fun = function() {};
let fun_obj = new fun();
// obj.prototype.age = 10;
// console.log(obj.age);

fun.prototype.age = 'demo';

console.log(fun.prototype.age);
console.log(fun_obj.age);

/**
 * 只有函数有原型！！
 * 因此我访问obj.prototype.age的时候会报错
 * 函数存在原型，使用函数实例化的函数可以使用原型链找到原型，但是不能去定义原型。
 */
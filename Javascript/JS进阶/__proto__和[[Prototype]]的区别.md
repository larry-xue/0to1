# __proto__和\[\[Prototype]]的区别

先看下面这一段代码：
```js
const obj1 = Object.create(null); // very plain object
obj1.__proto__ = Array.prototype;
console.log(obj1.slice) // undefined
```

`console.log(obj1.slice) // undefined` 这一行难道不应该是打印出slice函数吗？毕竟重新定义了`obj1`的原型对象，那么按照原型链的规则，应该会向上查询到`slice`方法的。但为什么没有呢？

那是因为
**Object原型上的__proto__的set才有改变\[\[Prototype]]的功能，然而Object.create(null)的对象设置的__proto__只是一个普通的属性，没有改变\[\[Prototype]]**

这恰恰说明了`__proto__`不是一个对象的属性，只是 `Object.prototype` 的访问器属性：


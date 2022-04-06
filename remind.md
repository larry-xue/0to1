# js
```js
// 对象可以解构
{...obj}
```

for..in 只会列出可枚举的属性。这就是为什么它和其余的 Object.prototype 属性都未被列出。

简单的赋值不会影响, this.arr = ['aasa'];但是如果是this.arr.push('aasa'); 那么就会顺着原型链查找arr属性。
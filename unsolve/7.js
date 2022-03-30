// 函数属性是什么？可以用this访问吗？
function func() {
    this.name = 'azoux';
}

func.pre = 'xue';
func.bind({ age: 10 });
console.log(new func());
console.log(new func().pre) // undefined
console.log(func.pre) // xue
console.log(func.constructor instanceof Object) // true

// prototype中有一个constructor对象,在函数上定义的属性都在constructor对象上

// [[Scope]]属性，caller
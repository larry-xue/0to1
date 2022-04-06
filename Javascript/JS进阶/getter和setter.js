// 对象属性有两种：1.数据属性 2.访问器属性
// 有一个众所周知的约定，即以下划线 "_" 开头的属性是内部属性，不应该从对象外部进行访问

let obj = {
    nameIn: 'azoux',
    get name() {
        console.log('in get name!');
        return this.nameIn;
    },
    set name(value) {
        console.log('in set name!');
        this.nameIn = value;
    }
}

console.log(obj.name)
obj.name = '12';
console.log(obj.name)
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// Object.getPrototypeOf(obj).a

// this 根本不受原型的影响。
// 无论在哪里找到方法：在一个对象还是在原型中。在一个方法调用中，this 始终是点符号 . 前面的对象。
// 方法是共享的，但对象状态不是。
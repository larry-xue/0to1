class MyClass {
    ownprop = 'tototo'; // 类字段重要的不同之处在于，它们会在每个独立对象中被设好，而不是设在 User.prototype
    constructor(name) {
        this._name = name != undefined ? name : 'azoux';
        this.age = 20;
    };
    get name() {
        if (this._name === 'azoux') return 'you havent set your name!';
        else return this._name;
    };
    set name(val) {
        this._name = val;
    };
    ['say' + 'Hi']() {
        console.log(`Hello ${this._name}!`);
    };
    [`yoyo${this._name}`]() { // yoyoundefined
        console.log('hhhh');
    };
    getAge = () => {
        return this.age; // 绑定this
    }
}

const obj = new MyClass()
const obj2 = new MyClass('azou2x')
obj.ownprop = 'azoux-own';
console.log(obj)
console.log(obj2)
console.log(typeof MyClass)
obj2.name = 'tptptp';
console.log(obj.name)
console.log(obj2.name)
obj2.sayHi();
console.log(Object.getPrototypeOf(obj2));

// 通过 class 创建的函数具有特殊的内部属性标记 [[IsClassConstructor]]: true

// 在class中访问属性仍然需要使用 this. 语法

class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

class Dog extends Animal {
    hide() {
        console.log(`${this.name} is hiding!`);
    }
}

const dog1 = new Dog('ylx');
console.log(dog1);
dog1.hide();
dog1.getName();
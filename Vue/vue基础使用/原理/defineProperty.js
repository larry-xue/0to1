// Vue响应式原理
// const data = {};
// const na2me = 'azoux';

// Object.defineProperty(data, 'name', {
//     get() {
//         console.log('get data name');
//         return na2me;
//     },
//     set(newVal) {
//         console.log('set');
//         this.name = newVal;
//     }
// })

// console.log(data.name);
// data.name = 'tototo';
// console.log(data);

// let arr = [1, 2, 3, 4, 5, 6];
// let obj = {
//         name: 'azoux',
//         age: 21
//     }
// for (let val in obj) console.log(val);
// for in 可以遍历数组或对象，for of只能遍历数组或者类数组

const oldArrayProperty = Array.prototype;
// 创建一个新对象，新对象的原型指向数组的原型
// 然后重写新对象中的一些数组方法
const arrProto = Object.create(oldArrayProperty);
['push', 'pop', 'shift', 'unshift', 'map', 'reduce'].forEach(methodName => {
    arrProto[methodName] = function() {
        updateView();
        oldArrayProperty[methodName].call(this, ...arguments);
    }
})

function Observer(target) {
    if (typeof target !== 'object') return target;

    if (Array.isArray(target)) target.__proto__ = arrProto;

    for (let key in target) {
        defineReactive(target, key, target[key]);
    }
}

function defineReactive(target, key, value) {
    Observer(value);

    Object.defineProperty(target, key, {
        get() {
            return value;
        },
        set(newVal) {
            if (newVal != value) {
                value = newVal;
                Observer(value);
                updateView();
            }
        }
    })
}

function updateView() {
    console.log('update view');
}

let obj = {
    name: 'azoux',
    age: 21,
    info: {
        school: 'fzu'
    },
    firends: ['tom', 'smith']
}

Observer(obj);
obj.age = 22;
obj.info.school = 'aaa';
obj.name = { plz: 'azoux' };
obj.name.plz = 'x';
obj.firends.push('tina');
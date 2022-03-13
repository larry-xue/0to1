/**
 * 实现深拷贝
 * @param {*} obj 
 * @returns {*} 拷贝完的对象
 */
function deepCopy(obj) {
    let type = Object.prototype.toString.call(obj);
    type = type.split(' ')[1].split(']')[0];
    console.log(type);
    if (type === 'Number') {
        return obj;
    } else if (type === 'Object') {
        const new_obj = {};
        for (item in obj) {
            if (typeof item === 'object') {
                new_obj[item] = deepCopy(item);
            } else {
                new_obj[item] = obj[item];
            }
        }
        return new_obj;
    } else if (type === 'Function') {
        return obj;
    } else if (type === 'String') {
        return obj;
    } else if (type === 'Boolean') {
        return obj;
    } else if (type === 'Array') {
        const arr = [];
        for (item of obj) {
            if (typeof item === 'object') {
                arr.push(deepCopy(item));
            } else {
                arr.push(item);
            }
        }
        return arr;
    } else if (type === 'Null') {
        return null;
    }
}

const obj = {
    a: 1,
    b: {
        bb: 1
    },
    d: [1, 2, { cc: '123' }]
}

// const copy_obj = deepCopy(obj);
// console.log(obj === copy_obj)
// console.log(copy_obj);
// console.log(deepCopy(null))
/**
 * 深拷贝优化版
 *
 * @param {*} source
 * @returns {*}  
 */
function deepClone2(source) {
    let target;
    console.log(source.constructor);
    if (source.constructor === Array || source.constructor === Object) {
        target = source.constructor === Array ? [] : {};
        for (let key in source) {
            if (source.hasOwnProperty(key)) {
                if (source[key] && typeof source[key] === 'object') {
                    target[key] = deepClone2(source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        }
    } else {
        target = source;
    }
    return target;
}

console.log(deepClone2(function () { }))
console.log(deepClone2([]))
console.log(deepClone2(1))
console.log(deepClone2(obj))
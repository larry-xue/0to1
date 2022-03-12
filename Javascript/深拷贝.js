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
    }
}

const obj = {
    a: 1,
    b: {
        bb: 1
    },
    d: [1, 2, { cc: '123' }]
}

const copy_obj = deepCopy(obj);
console.log(obj === copy_obj)
console.log(copy_obj);
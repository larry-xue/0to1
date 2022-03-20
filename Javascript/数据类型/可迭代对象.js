let range = {
    from: 1,
    to: 5
}

range[Symbol.iterator] = function() {
    // 返回迭代器对象
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    }
}

// for (let val of range) console.log(val);

// 显式调用
let str = 'azoux';
let iterator = str[Symbol.iterator](); // 先调用迭代器返回一个迭代器对象

while (true) {
    next = iterator.next();
    if (next.done) break;
    else {
        // do something...
        console.log(next.value);
    }
}

// 类数组对象
const divs = document.getElementsByTagName('div');
// 类数组对象没有push pop等方法
// divs.push('123');  
console.log(divs);
// 有一个全局方法 Array.from 可以接受一个可迭代或类数组的值，并从中获取一个“真正的”数组
console.log(Array.from(divs));
console.log([...divs])
console.log([...range]);
let str2 = '𝒳😂𩷶';
console.log(Array.from(str2)[0].length)
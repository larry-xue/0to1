let obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    length: 3
}

// 解构的原理

obj[Symbol.iterator] = function() {
    // 返回一个迭代器对象
    return {
        cur: 0,
        final: this.length,
        next() {
            if (this.cur < this.final) {
                return {
                    value: this.cur++,
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

for (let val of obj) {
    console.log(val);
}

console.log([...obj]); // 对象解构为数组
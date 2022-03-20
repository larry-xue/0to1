Array.prototype.myReduce = function(fn, initial) {
    // function(accumulator, item, index, array
    let sum;
    if (initial !== undefined) sum = initial;
    else sum = 0;
    this.forEach((item, idx) => {
        sum = fn(sum, item, idx, this)
    })
    return sum;
}

let arr = [1, 2, 3, 4, 5, 6];
const res1 = arr.reduce((sum, val) => {
    return sum + val;
}, 0);

const res2 = arr.myReduce((sum, val) => {
    return sum + val;
}, '9');

console.log(res1);
console.log(res2);
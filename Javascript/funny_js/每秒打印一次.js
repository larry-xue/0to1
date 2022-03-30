/**
 * 编写一个函数 printNumbers(from, to)，使其每秒输出一个数字，数字从 from 开始，到 to 结束。

    使用以下两种方法来实现。

    使用 setInterval。
    使用嵌套的 setTimeout。
 * 
 */


function printNumbers(from, to) {
    let timeid = setTimeout(function re() {
        if (from <= to) {
            console.log(from++);
            timeid = setTimeout(re, 1000);
        }
    }, 1000)
}

printNumbers(1, 4);
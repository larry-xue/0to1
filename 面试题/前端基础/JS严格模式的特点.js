// JS严格模式细节要求很多，只掌握重点即可
/**
 * 全局开启/函数开启
 * 特点：
 *  - 全局变量必须先声明
 *  - 禁止使用with
 *  - 创建eval作用域
 *    - eval有单独的作用域
 *  - 禁止this指向window
 *  - 函数参数不能重名
 */

function fn(x, y, y) {
    console.log(y)
}

fn(10, 11, 12);
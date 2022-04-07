/**
 * 箭头函数的缺点？
 *  - 箭头函数没有arguments
 *  - 箭头函数的this是固定的（指向箭头函数的父作用域）
 *   - 无法通过apply call bind改变
 *   - 箭头函数的this指向定义时候的this
 *  - 某些箭头函数的代码难以阅读
 * 什么时候不能使用箭头函数？
 *  - 对象方法不适用
 *  - 箭头函数不能用作构造函数
 *  - 不适用于动态上下文
 *  - Vue生命周期和method
 *   - Vue组件的本质是个对象
 *   - React组件是Class
 * 
 *  Class里面可以用箭头函数，因为class本质是function
 */
# express with typescript

express 的中间件会去添加或修改，删除不同的属性，这些请求和响应上的属性 typescript 很难去被告知这些不同的属性存在或变更

type definition file 并不总是准确的

# soution

可以在代码中定义一个新的接口，基础原本的类，这样就可以在最小修改的情况下完成 ts 适配

# decorator

- functions that can be used to modify/change/anything different properties/methods in the class.
- Not the same as Javascript decorators
- used inside/on classes only
- understanding the order in which decorators are ran are the key to understanding them
- experimental!

## record

- decorator 是实验属性，需要在 tsconfig 中允许使用
- decorator 的第一个参数是对象的 prototype
- 第二个参数是应用 decorator 的方法/属性的名称
- 第三个参数是 propertyDescriptor
  - Object.definePropertyDescriptor
- decorator 只会被执行一次，就是在创建类的时候
- decorator 更像是一种语法糖
- decorator 的工厂函数，可以用于配置一个 decorator

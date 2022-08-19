# express with typescript

express 的中间件会去添加或修改，删除不同的属性，这些请求和响应上的属性 typescript 很难去被告知这些不同的属性存在或变更

type definition file 并不总是准确的

# soution

可以在代码中定义一个新的接口，基础原本的类，这样就可以在最小修改的情况下完成 ts 适配

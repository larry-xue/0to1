使用 composition 来创建一个通用的类很不错，但是如果我们想要定制一个类，就变得非常苦难了，因为 composition 有很多地方是 hardcode，因为 composition 中有很多嵌套的属性

你并不需要总是使用组合，你也并不需要总是使用继承

在 typescript 中，定义一个 class，class 的 constructor 里面的语句在转义成 JavaScript 之后会被放在最后执行，在其他区域声明的变量会在其之前执行，但是如果是在 constructor 参数里面声明并分配的变量，会在最开始的时候执行。

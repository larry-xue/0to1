# overview

we will randomly generate a user and a company, and show their position in google maps

# my note

- 当我们在使用一个很复杂的类时，可以考虑将它封装成一个自定义的类，仅暴露出需要的接口
- interface 可以看作是一个介于 type 与 class 之间的产物，它不像 type 那样比较原子化，也不像 class 一样可以产生具体的对象。interface 规定了参数的格式
- 不是去自定义 map 类去适应所有其他不同的类，而是其他类去实现 map 类所需要的接口
- interface 规定了那些类将如何工作
- 使用接口在不同类之间建立一种依赖类型

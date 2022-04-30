function tsDemo(data: { x: number; y: number }) {
  console.log('123')
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}

tsDemo({
  x: 6,
  y: 8,
})

// 基础类型
const count: number = 123
console.log(count.toFixed(2))
const myName = '123'
let bigNum: bigint
let temp: number | string | number[]
// 对象类型
type Person = {
  // 类型别名
  // 定义一种类型
  x: string
}

class Teacher {
  name: string
}

const nums: (number | string)[] = [1, 3]
const getTotal: (x: number) => number = function (x) {
  return x
}

let name2 = 'azoux' // 类型推断
let count2: number // 类型注解
const copy = name2 + count2 // 类型推断

// 函数相关类型
function add(first: number, second: number): string {
  return `${first + second}`
}

function sayHello(): void {
  console.log('void')
}

// 函数永远都不可能执行完
function errorEmitter(): never {
  throw 'error'
  // console.log(1)
}

// 解构的类型注解
function addNum({ first, second }: { first: number; second: number }) {
  return first + second
}

// 元组,长度固定,每一项的类型也固定
// 处理csv文件
const teacherInfo: [string, string, number] = ['Draft', 'male', 18]

// 接口
// 通用的类型接口
// 类型别名可以代表基础类型,接口只能替代对象类型
interface Person2 {
  name: string
  age?: number
  readonly hahah: number
  [propName: string]: any
}

function getName(person: Person2) {
  return person.name
}

getName({
  name: '123',
  hahah: 123,
  yoyoyo: 2,
})

interface Teacher extends Person2 {}
class myTeacher implements Person2 {
  [propName: string]: any
  name: string
  age?: number
  hahah: number
}

interface func {
  (word: string): string
}

const say: func = (word: string) => {
  return word
}

// 类的定义与继承
class myClass {
  name: string
  age = 19
  getName() {
    return this.name
  }
}

class myClass2 extends myClass {
  getAge() {
    return super.getName()
  }
  // 当父类方法被子类重写之后,可以用super去调用
}

// 访问类型与构造器
// public, protected, private
// public 运行类内类外调用
// private 不允许在类外使用
// protected 运行在类内和继承的子类中使用
class Person3 {
  // 传统写法
  // public name: string
  // constructor(name: string) {
  //   this.name = name
  // }
  // 简化写法
  constructor(public name: string) {}
}

class Teacher3 extends Person3 {
  private constructor(name: string, private age: number) {
    super(name)
  }
  get getAge() {
    return this.age
  }
  set setAge(newAge) {
    this.age = newAge
  }
  static getInstance() {
    return new Teacher3('azoux', 123)
  }
}

console.log(Teacher3.getInstance())

abstract class Geom {
  width: number | undefined
  abstract getArea(): number // 抽象方法，子类必须实现
}

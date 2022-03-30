// typeof 检测数据类型
// 简单数据类型 & 复杂数据类型

function Obj() {
    this.name = 'azoux'
}

Obj.prototype = {}; // 相当于是Object.prototype = null;

let obj = new Obj();
console.log(obj);
console.log(Obj);
function Obj() {
    this.name = 'azoux';
}

const my = new Obj();
console.log(my);

Obj.prototype = Array.prototype;
Array.prototype.coco = 1;

console.log(my.coco);
const my2 = new Obj();
console.log(my2.coco);
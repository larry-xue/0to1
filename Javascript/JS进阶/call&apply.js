// call
const foo = {
    name: 'foo',
    getName(x, y) {
        console.log(this.name + (x + y));
    }
}

const bar = {
    name: 'bar'
}

foo.getName(1, 2); // foo
foo.getName.call(bar, 2, 3); // bar
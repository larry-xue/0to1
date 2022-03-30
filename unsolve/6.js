// .bind()方法的原理是什么？
// .bind()是给function添加this属性吗？

function fn() {
    console.log(fn.this);
    console.log(this);
}

fn();
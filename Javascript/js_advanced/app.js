/*
var a = 'hello world';

function b() {
  console.log('called b');
  // console.log('b call ', cVal);
  console.log(this);
}

function c() {
  console.log('called c');
  const cVal = 'cVal';
  console.log(this);
  function cChild() {
    console.log('this is c Child');
    console.log('c child call ', cVal);
    console.log(this === window);
  }
  cChild();
}

c();
console.log(a);

*/

/**
 * 执行环境的组成：
 * global object + this + outer environment + your code
 * “Hoisting”
 * 在执行环境的创建阶段，JavaScript引擎会为你的代码中的变量和函数预留内存位置
 * 因此在执行阶段时，这些变量就已经在内存中了
 */

/**
 * JavaScript & undefined
 * undefined in JavaScript mean a variable's value has't be set
 * undefined mean a programer never set a value, so don't set undefind to a variable
 */

/**
 * every function will create its execution context, the execution context includs global object + this + outer environment + your code
 */

/**
 * lexical enviroment
 * outer reference depends on its lexical enviroment
 * the outer reference is the execution context in which the function was created
 */

/**
 * javascript的异步是在它之外的其他引擎的工作，而在JavaScript引擎内部，是同步的
 */

/**
 * a namespace is a container of variables and functions
 */

/*
console.log(
  JSON.stringify({
    firstname: 'azoux',
    isAProgrammer: true,
    address: { city: 'xm' },
  })
);

*/

/**
 * First class function
 * in javascript, function is a special object
 * the function code you write is just one of its property
 * there are other things attachs to the function
 * function is more than a code container
 */

const func1 = function () {
  console.log(123);
};

// func1.code = 'code';

console.dir(func1);

/**
 * expression & statement
 * expression will return a value
 * statement is the cell of code
 * function is an expression
 */

/**
 * mutate an object = change an object
 */

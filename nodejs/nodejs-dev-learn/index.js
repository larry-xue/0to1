import inquirer from 'inquirer';
import minimist from 'minimist';
import chalk from 'chalk';
import ProgressBar from 'progress';
import express from 'express';
import readline from 'readline';
import { car } from './util.js';

const args = minimist(process.argv.slice(2));
console.log(args.azoux);

console.log('My %s has %d ears', 'cat', 2, '\nrealy?');
console.log('%o', Number);
console.clear();
console.count('yoyoyoyo');

const fun3 = () => console.trace('this is a message');
const fun2 = () => fun3();
const fun1 = () => fun2();

// fun1();

function doSomething() {
  console.log('i am doing something!~');
}

function measureDoingSomething() {
  console.time('start doing something!');
  doSomething();
  console.timeEnd('start doing something!');
}

measureDoingSomething();
console.error('this is stderr');

console.log(chalk.green('hi!'));

const bar = new ProgressBar(':eta', {
  total: 10,
});
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 50)

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const question1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('How old are you?', (age) => {
//       console.log(chalk.whiteBright(`I'm ${age} too!`));
//       rl.close();
//       resolve();
//     });
//   });
// };

// await question1();

// const question2 = () => {
//   return new Promise((resolve, reject) => {
//     readline.question("What's your name?", (name) => {
//       console.log(chalk.whiteBright(`Hi ${name}!`));
//       resolve();
//     });
//   });
// };

// const askQuestion = async () => {
//   await question1();
//   await question2();
//   readline.close();
// };

// askQuestion();

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
  {
    type: 'password',
    name: 'pwd',
    message: 'Enter your pwd:',
  },
];

// 对于async和await的思考，async用于声明一个函数是异步的，其中最外层原本就是异步的，也就不用申请，所以await可以直接在全局环境中执行
// 但是在函数中却需要该函数声明await
async function testAwait() {
  await inquirer.prompt(questions);
}

console.log(car);

const globalVar = 'global';

const profile = {
  age: 19,
  name: 'alex',
  coords: {
    lat: '12',
    lng: '23',
  },
  setAge(age: number): void {
    // this 的值是在代码运行时计算出来的，它取决于代码上下文。
    this.age = age;
    console.log(globalVar);
  },
  setName(): void {
    console.log(this);
    const name = 'azoux';
    const askName = (): void => {
      console.log(this.name);
      console.log(name);
    };

    function askAge(): void {
      // 函数的变量作用域与定义时的位置有关，而this则是完全在运行时确定的
      // azoux.xxx() 其中xxx函数的this就是azoux，可以看作是xxx.call(azoux)
      // this是用于指定对象中的值
      console.log(this);
    }

    askName();
    askAge();
  },
};

profile.setAge(20);
profile.setName();

const {
  coords: { lat, lng },
} = profile;

function Calculator() {
    this.read = () => {
        this.a = +prompt('a=?');
        this.b = +prompt('b=?');
    }
    this.sum = () => this.a + this.b;
    // this.mul = () => this.a * this.b;
    // function mul() {
    //   return this.a * this.b;
    // }
    // function中不能这么定义方法
    // mul() {
    //   return this.a * this.b;
    // }
}
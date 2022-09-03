class ID {
  constructor(num) {
    this.num = num;
    this.pass = '';
  }
  generate() {
    var numbers = '0123456789'.split('');
    for (var i = 0; i < this.num; i++) {
      this.pass += numbers[Math.floor(Math.random() * 10)];
    }
    return this.pass;
  }
}
module.exports = ID;

export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atushi';
  static lastName: string = 'Ishida';

  static work() {
    //  "Hey, guys! This is Atushi! Are you interested in TypeScript?";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

// Point: new で新規にインスタンスを生成しなくてもメンバにアクセス可能
console.log(Me.isProgrammer);
console.log(Me.work());

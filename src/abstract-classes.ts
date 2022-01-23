export {};

abstract class Animal {
  abstract cry(): string;
}

// Point: 抽象メソッドは必ずオーバーライドをする

class Lion extends Animal {
  cry() {
    return "roar";
  }
} 

class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}
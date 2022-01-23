export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  // Point: nameの初期化処理はsuperで、speedの初期化処理は子クラスで行う
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    // Point: super.親クラスのrunメソッドを実行
    return `${super.run()} ${this.speed}km`;
  }
}

// let animal = new Animal();
// console.log(animal.run());
// 
// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("Mickey").run());
console.log(new Lion("Simba", 80).run());
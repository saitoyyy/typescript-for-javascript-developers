export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('taro', 30);
console.log(taro);

type PersonType = typeof Person;

// Point: ConstructorParameters<typeof class名> ➡ constructorの引数がtuple型で取得
type Profile = ConstructorParameters<PersonType>;

const profile:Profile = ['Ham', 43];
const ham = new Person(...profile);
console.log(ham);


// Point: infer➡条件の一部としてgenerics型を定義できる
// infer P Pは戻り値の型
// MyConstructorParametersを使用した時点で型引数で渡ってくるのは、classの引数の型なので必ずtrueになる
// type MyConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

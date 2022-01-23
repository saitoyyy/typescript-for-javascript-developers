export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

// Point: stringのデータを代入すると型がany型からstring型に遷移する
console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = "string";

fooString = barString;

let fooStringLiteral:  'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age:number, public name:string) {}
}

// Point: object間の型の互換性の評価では各々の方が一致しているかは気にしていない
let me: Animal;
me = new Person(43, "ham");
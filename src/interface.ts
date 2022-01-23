export {};

type ObjectType = {
  name: string; 
  age: number;
};

// Point: interface 型の名前でobuject型に名前をつけることが可能
// interfaceはエイリアス（別名をつける）ではないので=は不要
interface ObjectInterface {
  name: string; 
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43
};
export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

// Point: 関数の型を取得したい場合➡ReturnType
type ReturnTypeFromAdd = ReturnType<typeof add>;
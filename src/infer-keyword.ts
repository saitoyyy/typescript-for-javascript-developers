export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

// Point: 関数の型を取得したい場合➡ReturnType
type ReturnTypeFromAdd = ReturnType<typeof add>;

// Point: infer➡条件の一部としてgenerics型を定義できる
// infer R Rは戻り値の型
// MyReturnTypeを使用した時点で型引数で渡ってくるのは、"関数"であるので必ずtrueになる
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any)
    => infer R
    ? R : any;
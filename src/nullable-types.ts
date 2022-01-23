export {};

// Point: tsconfig.jsonで"strictNullChecks": falseに変えると
// nullのコンパイルエラーがなくなる

// Point: 暫定的にnullを使いたい場合、union型を用いることでnullも許容できる
let profile: {name: string, age: number | null} = {
  name: 'Ham',
  age: null
};

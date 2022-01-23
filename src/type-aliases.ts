export {};

// Point: aliases➡別名を持たせる
// type （別名の名前) = 型
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Ham',
  age: 43
};


type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'Ham',
  age: 43
};

// Point: typeof 変数 ➡ 変数のデータから変数の型を取り出す
type Profile2 = typeof example1;

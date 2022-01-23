export {};

type Profile = {
  name: string;
  age: number
};

const me: Profile = {
  name: 'Ham',
  age: 43
};

me.age++;

console.log(me);

// 読み取り専用はReadonlyというutility型を使用する
type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Shigeru',
  age:40
};

// Point: readonly型となっているので上書きできない
// friend.age++;

// Point: 定義の方法
type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;

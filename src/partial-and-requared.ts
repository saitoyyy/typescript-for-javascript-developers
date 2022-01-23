export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// Point: Partialを用いるとオプショナルな属性を持たせることができる
type PartialType = Partial<Profile>;

// Point: 後になって必須な属性が必要になった時にrequiredを用いる
type RequiredType = Required<Profile>;
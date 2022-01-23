export {};


const debugProfile = (name: string, age: number) => {
  console.log({name,age});
};

debugProfile('Ham', 43);

// Point: Parameters<typeof 関数名> ➡ tuple型
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

// Point:  展開➡...
debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P) =>
  any 
  ? P 
  : never;
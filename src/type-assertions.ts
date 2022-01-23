export {};

let name: any = 'Ham';

// Point: 型に制約を与える方法
// 型アサーションの方法 as推奨, <>非推奨
let length = (<string>name).length;

// length = "foo";
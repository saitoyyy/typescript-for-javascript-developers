export {};

// Point: 変数の前にreadonlyを入れると読み取り専用になる
// class VisaCard {
//   readonly owner: string;
//
//   constructor(owner: string) {
//     this.owner = owner;
//   }
// }
//
// let myVisaCard = new VisaCard('ham');
// console.log(myVisaCard.owner);

// Point: 読み取り専用となっているので、書き込みできない
// myVisaCard.owner = 'ベーコン';

// Point: publicとすることで初期化処理ができる
class VisaCard {
  constructor(public readonly owner: string) {}
}
let myVisaCard = new VisaCard('ham');
console.log(myVisaCard.owner);

// myVisaCard.owner = 'ベーコン';

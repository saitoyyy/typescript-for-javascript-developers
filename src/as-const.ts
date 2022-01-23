export {};

let name = "Atsushi";

name = 'Ham';

// Point: as constを用いることによって別の文字列で上書きできなくなる
let nickname = 'Ham' as const;
nickname = 'Ham';

// Point: as constをオブジェクトに用いることで全ての属性がread onlyになる
let profile = {
  name: 'Atsushi',
  heigth: 178
} as const;

// profile.name = 'Ham';
// profile.heigth = 180;

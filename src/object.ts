export {};

// Point: オブジェクトはobjectで型アノテーションをする
// ただし想定外の構造のデータに差し変わっても気づかない
let profile1: object = { name : 'Ham'};
profile1 = { barthYaer: 1976};

// Point: {key: value}で型アノテーションをする
// nameが存在することを宣言できる
let profile2: {
  name: string;
} = {name: 'Ham'};
profile2 = { name: 'Nimo' };


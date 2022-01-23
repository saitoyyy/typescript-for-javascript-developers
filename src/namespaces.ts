export {};

// Point: class名が同じ場合にnamespaceで名前空間を分ける

namespace Japanese {
  export namespace Tokyo {
    // Point: 外からアクセスできるようにexportを付ける
  export class Person {
    constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}


namespace English {
  export class Person {
    constructor(
      public firstName: string, 
      public middleName: string, 
      public lastName: string
      ) {}
    }
}



const me = new Japanese.Tokyo.Person('Ham');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('Hamyan');
console.log(meOsaka.name);

const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael);

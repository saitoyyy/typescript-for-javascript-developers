export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnkown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnkown === 'number') {
  let sunUnknown = numberUnkown + 10;
}



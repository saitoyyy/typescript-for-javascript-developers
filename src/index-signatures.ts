export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {name: 'Ham', underTwenty: false};

// How to write index singnatures
// { [index: typeForIndex]: typeForValue }

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
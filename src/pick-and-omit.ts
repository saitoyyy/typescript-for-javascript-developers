export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// Point: Pick<全体の型, union型>➡欲しいものを選択する
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// Point: Omit<全体の型, union型>➡要らないものを選択する
type SmallProfile = Omit<DetailedProfile, 'height'>;

// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// type MyOmit<T> = Pick<T, Exclude<typeof T, 'height'>>;
// type MyOmit = Pick<DetailedProfile, Exclude<'name'|'height'|'weight', 'height'>>;
// type MyOmit = Pick<DetailedProfile, Exclude<'name'|'height'|'weight', 'height'>>;
type MyOmit = Pick<DetailedProfile, 'name'|'weight'>;

type MySmallProfile = MyOmit;
export {};

type Profile = {
  name: string;
  age: number;
};

// Point: 既存のオブジェクトの型を流用して新たな型を定義することができる
// Partial を右クリックで「定義に移動」で型の定義を閲覧可能
// typeof でunion型として定義して、inで1個ずつ取り出す
type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;


type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;
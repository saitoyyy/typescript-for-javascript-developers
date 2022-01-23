export {};

// type Exclude<T, string | number> = T extends string | number ? never : T;
// Point: Tにはstring, number, DebugTypesの3つの型が渡ってくる
// A extends B AとBで互換性があるかを確認している
// ? A : B 
// trueの場合は:の左側が採用される（falseの場合は:の右側が採用される
type MyExclude = 
| (string extends string | number ? never : string) // true neverが採用
| (number extends string | number ? never : number) // true neverが採用
| (DebugType extends string | number ? never : DebugType); // false DebugTypeが採用

// type MyExclude = never | never | DebugType
// -> type MyExclude = DebugType

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude;



// Point: Extract, Nullableも定義の考え型は同じ
type MyExtract = 
| (string extends string | number ? string : never)
| (number extends string | number ? number : never)
| (DebugType extends string | number ? DebugType : never)

// type MyExtract = string | number | false
// -> type MyExtract = string | number

type NonFunctionTypeByExtract = MyExtract;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>

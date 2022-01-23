export {};

// Point: Exclude<全体の型, 削除したい型>
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NonfunctionType = Exclude<SomeTypes, DebugType>;

// Point: Functionは関数の総称
type ExcludingFunction = Exclude<SomeTypes, Function>;

// Point: Extract<全体の型, 抽出したい型>
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// Point: NonNullable<全体の型> ➡ null, undefiedを排除する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>

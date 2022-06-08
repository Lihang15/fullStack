interface User {
  id: number;
  age: number;
  name: string;
};

// 相当于: type PartialUser = { id?: number; age?: number; name?: string; }
type PartialUser = Partial<User>

// 相当于: type PickUser = { id: number; age: number; }
type PickUser = Pick<User, "id" | "age">

// 相当于: type RequiredUser = { id: number; age: number;name: string }
type RequiredUser = Required<User>

// 相当于: type PickUser = { age: number; name: string; }
type OmitUser = Omit<User, "id">

// 相当于 可以自定义健值对
const record:Record<string,string>={'123':'456',name:'123'}
console.log(record)
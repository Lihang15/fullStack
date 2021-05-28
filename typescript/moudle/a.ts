 
export const foo: number = 123;
 
export default class A {
    public static num: number = 111;
}
 
export class B {
    public static num: number = 111;
 
    public static f(): void {
        console.log(B.num);
    }
}


//namespace 用于分组管理 

export namespace Utils {
    export interface IPerson {
        name: string;
        age: number;
    }
    export class IPerson1 {
        name:string = '000000'
    }
    export let a :string = "namespace"
}

export namespace Utils1 {
    export interface IPerson {
        name: string;
        age: number;
    }
    export class IPerson1 {
        name:string = '111111'
    }
    export let a :string = "namespace1"
}

//别的地方引入方式分两种  现在只有一种了 2已经废弃

//1 通过 import {Utils,Utils1} from './namespace'   Utils.a 这样

//2./// <reference path="xxxx.d.ts"/>  现在这种方式在.ts文件里已经废弃  在.d.ts里还可以用 就是合并两个文件
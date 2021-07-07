let a :string = 'wanglihang'

interface P {
    a: string
}

interface person{
    name:string,
    age?:number,
    [prop:string]:number | string,
    readonly xx :string,
}

const b:person = {
    name:'wanglihang',
    xxxxxxx:'xxxxx',
    xx:'xxx',
}
b.age = 19
b.xxxxxxx = 'xxxxx'

console.log(b)


function add(x: number,y: number,z?: number): number{
    return x+y
}

const add2 :(x: number,y: number,z?:number)=>number=add      

console.log(add2(1,2))
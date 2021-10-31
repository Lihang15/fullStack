class MyQueue{
    constructor(){
        //数组push pop 模仿栈入栈，出栈操作
        this.in = []
        this.out = []
    }
    push(val) {
        this.in.push(val)
    }
    pop(){
        if (this.out.length<=0){
            while(this.in.length>0){
                this.out.push(this.in.pop())
            }
        }
        return this.out.pop()
    }
}

let que = new MyQueue()
que.push(1)
que.push("123")
que.pop()
que.push(2)
que.pop()
console.log(que.pop()) 
console.log(que.pop()) 

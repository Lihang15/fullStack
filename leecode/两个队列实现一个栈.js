class myStack{
    constructor(){
        //数组 push shift模拟队列入队出队操作
        this.queue1 = [];
        this.queue2 = [];
      
    }
    push(val) {
        //所有结果都在queue1里存
       this.queue1.push(val)
      }
    pop() {
        if(this.queue1.length==0){
            return null;
        }
		if(this.queue1.length==1){
            return this.queue1.shift()
        }else{
            //把最后入第一个队列的元素保留，其余的放到另一个队列，
            //然后把剩这一个取出，在把队列二的都倒回来，往复操作
            while(this.queue1.length!=1){
                this.queue2.push(this.queue1.shift())
            }
            let result = this.queue1.shift()
            while(this.queue2.length){
                this.queue1.push(this.queue2.shift())
            }
            return result 
        }
    }
}
let my_queue = new myStack()
my_queue.push(1)
my_queue.push(3)
let result = my_queue.pop()
my_queue.push(2)
let result1 = my_queue.pop()
console.log(`result:${result}`)
console.log(`result1:${result1}`)
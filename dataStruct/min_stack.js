class MinStack {
    constructor() {
        this.content = []
        this.minContent = []
    }
    push(val) {
        this.content.push(val)
        if (this.minContent.length <= 0 || this.minContent[this.minContent.length - 1] >= val) {
            this.minContent.push(val)
        }
    }
    pop() {
        if (this.minContent[this.minContent.length - 1] == this.content[this.content.length - 1]) {
            this.minContent.pop()
        }
        return this.content.pop()
    }

    min() {
        return this.minContent.pop()
    }
}
let minstack = new MinStack()
minstack.push(2)
minstack.push(1)
minstack.push(3)
minstack.push(3)
console.log(minstack.pop())
console.log(minstack.pop())
console.log(minstack.pop())
console.log(minstack.min())
console.log(minstack.pop())
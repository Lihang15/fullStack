
function node(val){
    this.val = val
    this.Next =null
}

function reverse(head){
    let arr = []
    while(head!=null){
        arr.push(head)
        head =head.Next
    }
    let newhead = arr.pop()
    while(arr.length>0){
        let node = arr.pop()
        node.Next.Next = node
        node.Next = null
    }
    return newhead
}
let node1 = new node(1)
let node2 = new node(2)
let node3 = new node(5)
node2.Next = node3
node1.Next = node2
console.log(reverse(node1))
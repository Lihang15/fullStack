function listNode(val) {
    this.val = val
    this.next = null
}

function printListNode(head) {
    let arr = []
    while (head != null) {
        arr.unshift(head.val)
        head = head.next
    }
    return arr
}

var node1 = new listNode(1)
var node2 = new listNode(2)
var node3 = new listNode(3)
node1.next = node2
node2.next = node3
console.log(printListNode(node1))
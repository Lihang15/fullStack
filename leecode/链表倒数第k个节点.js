function Node(val){
    this.val = val
    this.Next =null  
}


function endk(head,k){
    let first = head
    let second = head
    // 先走k步数
    for(let i =0;i<=k-1;i++){
        first = first.next
    }
    while(first!=null){
        first = first.next
        second = second.next
    }
    console.log(second.val)
    return second
    
}

let node1 = new Node(2)
let node2 = new Node(3)
let node3 = new Node(4)
node1.Next =node2
node2.Next =node3
console.log(endk(node1,2).val) 
console.log(node1.val)

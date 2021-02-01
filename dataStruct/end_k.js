function Node(val){
    this.val = val
    this.Next =null  
}


function endk(head,k){
    let p1 = head
    let p2 = head
    for (let i = 0;i<k-1;i++){
        p1 = p1.Next
    }
    while(p1.Next!=null){
        p1 = p1.Next
        p2 = p2.Next
    }
    return p2
    
}

let node1 = new Node(2)
let node2 = new Node(3)
let node3 = new Node(4)
node1.Next =node2
node2.Next =node3
console.log(endk(node1,2).val) 
console.log(node1.val)

function node(val){
    this.val = val
    this.next = null
}


function isLoop(head){
    let fast = head.next.next
    let slow = head.next

    while(head){
        if(fast==slow){
            return true
        }
        fast = fast.next.next
        slow = slow.next
    }
}
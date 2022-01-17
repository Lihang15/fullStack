function node(val){
    this.val = val
    this.next = null
}


function isLoop(head){
    let fast = head
    let slow = head

    while(fast.next != null && fast.next.next != null && slow.next != null){
        fast = fast.next.next
        slow = slow.next
        if(fast==slow){
            return true
        }
    }
    return false
}
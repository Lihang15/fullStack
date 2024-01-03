function node(val){
    this.val = val
    this.next = null
}

// 链表最后一个节点 指向自己或前面的任意一个节点 形成一个环
function isLoop(head){
    let slow = root
    let fast = root
    
    while(fast!=null&&fast.next!=null){
        fast = fast.next.next
        slow = slow.next
        if(fast===slow){
            console.log(true);
            return true
        }
    }
    return false
}
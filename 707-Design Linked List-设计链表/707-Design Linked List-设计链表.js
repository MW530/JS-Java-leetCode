var  Node = function(val, next){
    this.val = val
    this.next = next
}

var MyLinkedList = function() {
    this.head = null
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let p = this.head
    let num = index
    while(p && num !== 0){
        p = p.next
        num--
    }
    if(num === 0 && p){
        return p.val
    }else{
        return -1
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.head = new Node(val, this.head)
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let p = this.head
    if(!p){
        this.addAtHead(val)
        return
    }
    while(p.next){
        p = p.next
    }
    p.next = new Node(val, null)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index <= 0){
        this.addAtHead(val)
        return
    }
    if(!this.head){
        return
    }
    let num = index - 1
    let p = this.head 
    while(p.next && num !== 0){
        p = p.next
        num--
    }
    if(num === 0 && !p.next){
        this.addAtTail(val)
    }else if(num === 0 && p.next){
        p.next = new Node(val, p.next)
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let num = index - 1
    if(num === -1){
        this.head = this.head.next
        return
    }
    let p = this.head
    while(p.next && num > 0){
        p = p.next
        num--
    }
    if(p.next){
        p.next = p.next.next
    }
    
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    //没有节点
    if(head === null) return head
    //一个节点
    if(head.next === null) return head
    //2+节点，其返回头必为第二个节点
    let newHead = head.next
    let temp,pre

    let p = head
    while(p !== null && p.next !== null){
        temp = p.next
        p.next = temp.next
        temp.next = p
        if(pre) pre.next = temp

        pre = p
        p = p.next
    }
    return newHead
};
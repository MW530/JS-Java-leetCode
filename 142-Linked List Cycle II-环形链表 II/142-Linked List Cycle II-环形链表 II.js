/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
    let slow = head

    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next

        //有环
        if(slow === fast){
            let node1 = head
            let node2 = fast

            while(node1 !== node2){
                node1 = node1.next
                node2 = node2.next
            }
            return node1
        }
    }
    return null
};

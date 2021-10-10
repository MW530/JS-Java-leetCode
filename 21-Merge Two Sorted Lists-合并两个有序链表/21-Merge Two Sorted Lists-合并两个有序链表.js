/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let p1 = l1
    let p2 = l2
    let sp,p
    

    if(p1 == null && p2 == null){
        return null
    }

    if(p1 == null){
        return p2
    }

    if(p2 == null){
        return p1
    }

    if(p1.val < p2.val){
        p = p1
        p1 = p1.next
    }else{
        p = p2
        p2 = p2.next
    }

    sp = p

    while(p1 && p2){
        //这种算法虽然简洁，但是效率因为存在变量的交换所以明显更低
        // if(p2.val < p1.val){
        //     temp = p1
        //     p1 = p2
        //     p2 = temp
        // }
        // console.log(p1, p2, sp)
        // p.next = p1
        // p1 = p1.next
        // p = p.next
        if(p1.val < p2.val){
            p.next = p1
            p1 = p1.next
        }else{
            p.next = p2
            p2 = p2.next
        }
        p = p.next
    }

    p.next = p1 ? p1 : p2
    return sp
};

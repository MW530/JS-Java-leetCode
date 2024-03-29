/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode virtualHead = new ListNode(0, head);
        ListNode pre;
        ListNode p = virtualHead;
        while(n-- > 0){
            p = p.next;
        }

        pre = virtualHead;
        while(p.next != null){
            pre = pre.next;
            p = p.next;
        }
        if(pre.next != null){
            pre.next = pre.next.next;
        }
        return virtualHead.next;
    }
}


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
    public ListNode reverseList(ListNode head) {
        //0个节点
        if(head == null){
            return null;
        }
        //一个节点
        if(head.next == null){
            return head;
        }
        //2+个节点
        ListNode pre = head;
        ListNode p = head.next;
        ListNode next = head.next.next;
        pre.next = null;
        while(next != null){
            p.next = pre;
            pre = p;
            p = next;
            next = next.next;
        }
        p.next = pre;
        return p;
    }
}
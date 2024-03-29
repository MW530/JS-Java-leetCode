
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int lengthA = 0;
        int lengthB = 0;
        int gap = 0;
        ListNode PA = headA;
        ListNode PB = headB;
        while(PA != null){
            lengthA++;
            PA = PA.next;
        }
        while(PB != null){
            lengthB++;
            PB = PB.next;
        }
        
        gap = Math.abs(lengthA - lengthB);
    
        System.out.println(gap);

        if(lengthA < lengthB){
            PA = headB;
            PB = headA;
        }else{
            PA = headA;
            PB = headB;
        }

        while(gap != 0){
            PA = PA.next;
            gap--;
        }

        while(PA != PB){
            PA = PA.next;
            PB = PB.next;
        }

        return PA;
    }
}
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        HashSet<ListNode> visited = new HashSet<>();
        ListNode p = head;
        while(p != null){
        	if(visited.contains(p)) {
        		return p;
        	}
            visited.add(p);
            p = p.next;
        }
        return null;
    }
}

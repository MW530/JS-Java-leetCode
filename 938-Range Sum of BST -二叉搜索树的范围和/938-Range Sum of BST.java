/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    int sum = 0;
    public int rangeSumBST(TreeNode root, int L, int R) {
        if(null!=root){
            if(root.val>=L&&root.val<=R){
                sum+=root.val;
                rangeSumBST(root.left,L,R);
                rangeSumBST(root.right,L,R);
            }
            else if(root.val<L)
                rangeSumBST(root.right,L,R);
            else if(root.val>R)
                rangeSumBST(root.left,L,R);
        }
        return sum;
    }
}
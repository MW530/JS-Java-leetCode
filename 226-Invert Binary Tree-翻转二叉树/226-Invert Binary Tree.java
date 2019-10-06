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
    public TreeNode invertTree(TreeNode root) {
        if(root != null){
          if(root.right != null) invertTree(root.right);
          if(root.left != null) invertTree(root.left);
          TreeNode temp = new TreeNode(0);
          temp = root.right;
          root.right =root.left;
          root.left = temp;
        }
        return root;
    }
}

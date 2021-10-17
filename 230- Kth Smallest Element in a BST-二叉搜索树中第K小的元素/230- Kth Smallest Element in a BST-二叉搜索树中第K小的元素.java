/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
// class Solution {
//     ArrayList<Integer> list = new ArrayList<Integer>();
//     public int kthSmallest(TreeNode root, int k) {
//         midOrder(root);
//         Collections.sort(list);
//         return list.get(k - 1);
//     }

//     public void midOrder(TreeNode tree) {
//         if(tree == null) {
//             return;
//         }
//         list.add(tree.val);
//         midOrder(tree.left);
//         midOrder(tree.right);
// 	}
// }

class Solution {
    TreeNode tem;
    int t,res;
    public int kthSmallest(TreeNode root, int k) {
        t = k;
        tem = root;
        dfs(tem);
        return res;
    }
    public void dfs(TreeNode tem){
        if(tem == null) return;
        dfs(tem.left);
        t--;
        if(t == 0) res = tem.val;
        dfs(tem.right);
    }
}

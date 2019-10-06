/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root !== null){
    if(root.left !== null) invertTree(root.left);
    if(root.right !== null) invertTree(root.right);
    [root.right,root.left] = [root.left,root.right];
  }
  return root;
};

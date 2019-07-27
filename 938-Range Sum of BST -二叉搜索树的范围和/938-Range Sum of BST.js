/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number}  L
 * @param {number} R
 * @return {number}
 */

/*
*The discription of the question is quite hard to understand,finally,with some solution and the definition of the BST,I finally 
understand that the question ask us to find the node:if node.val >= L && node.val <= R --->sum += node.value and recalculate it`s left child and right child. else if node.val < L ---> recalculate it`s right child,
else if node.val > R ---> recalculate it`s left child;
*/
var rangeSumBST = function(root, L, R) {
        var sum = 0;
        (function innerCal(node){
            if(node !== null){
                if(node.val >=L && node.val <= R){
                    sum += node.val;
                    innerCal(node.right);
                    innerCal(node.left);
                }else if(node.val < L){
                    innerCal(node.right);
                }else if(node.val > R){
                    innerCal(node.left);
                }
            }
    })(root);
    return sum;
};
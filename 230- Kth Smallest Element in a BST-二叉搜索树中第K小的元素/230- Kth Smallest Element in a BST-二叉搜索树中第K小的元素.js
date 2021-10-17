/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(root, k) {
//     let list = []
//     function midTravel(tree){
//         if(!tree || list.length === k){
//             return 
//         }
//         midTravel(tree.left)
//         list.push(tree.val)
//         midTravel(tree.right)
//     }
//     midTravel(root)
//     return list[k - 1]
// };

var kthSmallest = function(root, k) {
    let t = k
    let res = 0
    function midTravel(tree){
        if(!tree || t === 0){
            return 
        }
        midTravel(tree.left)
        t--
        if(t === 0){
            res = tree.val
        }
        midTravel(tree.right)
    }
    midTravel(root)
    return res
};

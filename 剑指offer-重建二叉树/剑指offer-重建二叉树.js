function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function reConstructBinaryTree(pre, vin)
{
    if(pre.length === 0){
      return null
    }
    let root = pre[0];
    let node = new TreeNode(root);
      if(vin.length <= 3 &&  pre[0] === vin[1]){
              let leftNode
              let rightNode
        if( vin[0] != null){
            leftNode = new TreeNode(vin[0]);
        }
        if( vin[2] != null){
            rightNode = new TreeNode(vin[2]);
        }
        node.left = leftNode
        node.right = rightNode
        return node
      }

    let midIndex = vin.indexOf(root);
    
    let left = reConstructBinaryTree(pre.slice(1,midIndex+1),vin.slice(0,midIndex))
    let right = reConstructBinaryTree(pre.slice(midIndex+1,pre.length),vin.slice(midIndex+1,vin.length))
    node.left = left;
    node.right = right;
    return node;
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};

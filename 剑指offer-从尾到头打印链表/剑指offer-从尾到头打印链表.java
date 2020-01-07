/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    let list = [];
    
    while(head !== null){
        list.unshift(head.val);
        head = head.next;
    }
    return list;
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};

本题最简单的思路为：统计两个链表的长度差gap，然后让长的链表先走gap步，此时两个链表相当于是后端对齐了，所以肯定能查找到相同的节点。

但是有一种代码简单的思路：即假设链表A的长度为l1，链表B的长度为l2。那么`l1+l2 = l2 +l1`。（貌似是废话）但是作用就在于，可以同步两个链表的迭代进度。所以具体就为：PA与PB均向后移动，然后当PA或PB为null（即移动到尾部时），将PA置为`headB`，PB置为`headA`。当PA和PB都换了过后，两个链表就同步了，此时就可以找到同一个节点了。动画可看[题解](https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/solution/mian-shi-ti-0207-lian-biao-xiang-jiao-sh-b8hn/)。

本题的限制反而更少了，几乎没有限制。只是列举出所有子集，那么只需要为递归设置条件为index大于数组的长度时终止即可。



另外还有一种迭代法：

思路与算法

记原序列中元素的总数为 nn。原序列中的每个数字 a_ia 
i的状态可能有两种，即「在子集中」和「不在子集中」。我们用 11 表示「在子集中」，00 表示不在子集中，那么每一个子集可以对应一个长度为 nn 的 0/10/1 序列，第 ii 位表示 a_ia i是否在子集中。例如，n = 3n=3 ，a = \{ 5, 2, 9 \}a={5,2,9} 时：

| 0/1序列 | 子集    | 0/1序列对应的二进制数 |
| ------- | ------- | --------------------- |
| oo0     | 0       | 0                     |
| o01     | {9}     |                       |
| o10     | {2}     | 2                     |
| o11     | {2,9}   | 3                     |
| 100     | {5}     | 4                     |
| 101     | {5,9}   | 5                     |
| 110     | {5,2}   | 6                     |
| 111     | {5,2,9} | 7                     |

可以发现 0/10/1 序列对应的二进制数正好从 00 到 2^n - 12 
n −1。我们可以枚举 \textit{mask} \in [0, 2^n - 1]mask∈[0,2 n−1]，mask 的二进制表示是一个 0/10/1 序列，我们可以按照这个 0/10/1 序列在原集合当中取数。当我们枚举完所有 2^n2 
n个mask，我们也就能构造出所有的子集。

```java
class Solution {
    List<Integer> t = new ArrayList<Integer>();
    List<List<Integer>> ans = new ArrayList<List<Integer>>();

    public List<List<Integer>> subsets(int[] nums) {
        int n = nums.length;
        for (int mask = 0; mask < (1 << n); ++mask) {
            t.clear();
            for (int i = 0; i < n; ++i) {
                if ((mask & (1 << i)) != 0) {
                    t.add(nums[i]);
                }
            }
            ans.add(new ArrayList<Integer>(t));
        }
        return ans;
    }
}
```


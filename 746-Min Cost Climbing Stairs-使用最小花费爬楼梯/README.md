本题是个比较简单的DP题，其中递推公式为：`dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i]`。

也可以使用节省空间的3元素数组方式，此时的递推关系则为：

```java
minCost[0] = minCost[1];
minCost[1] = minCost[2];
minCost[i] = Math.min(minCost[0] + cost[i-2], minCost[1] + cost[i-1])
```
本题是一个经典也比较简单的二维DP题，主要是递推方程。也比较简单，但是主要还是要分成两部分：

- 边际：`cost[i][j] = cost[i][j - 1]`或者`cost[i][j] = cost[i - 1][j]`
- 中心：`cost[i][j] = cost[i - 1][j] + cost[i][j - 1]`


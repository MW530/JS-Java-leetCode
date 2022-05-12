// 全数组方式
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        if (cost == null || cost.length == 0) {
            return 0;
        }
        if (cost.length == 1) {
            return cost[0];
        }
        int[] dp = new int[cost.length];
        dp[0] = cost[0];
        dp[1] = cost[1];
        for (int i = 2; i < cost.length; i++) {
            dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
        }
        //最后一步，如果是由倒数第二步爬，则最后一步的体力花费可以不用算
        return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
    }
}

// 简洁数组方式
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] minCost = new int[]{0, 0, 0};
        for(int i = 2; i <= cost.length; i++){
            minCost[0] = minCost[1];
            minCost[1] = minCost[2];
            minCost[2] = Math.min(minCost[0] + cost[i-2], minCost[1] + cost[i-1]);
        }
        return minCost[2];
    }
}
class Solution {
    public int numTrees(int n) {
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        for(int i = 2; i <= n; i++){
            for(int j = 1; j <= i; j++){
                dp[i] += dp[j - 1] * dp[i - j];
            }
        }
        return dp[n];

        // long num = 1;
        // for(int i = 0; i < n; i++){
        //     num = num * 2 * (2 * i + 1) / (i + 2);
        // }
        // return (int)num;
    }
    
}
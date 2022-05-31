class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        int sum = 0;
        for(int n : nums)sum += n;
        if((sum + target) % 2 != 0) return 0;
        int x = Math.abs((sum + target) >> 1);

        int [] dp = new int[x + 1];
        dp[0] = 1;
        for(int i = 0; i < nums.length; i++){
            for(int j = x; j >= nums[i]; j--){
                dp[j] += dp[j - nums[i]];
            }
        }
        return dp[x];
    }
}
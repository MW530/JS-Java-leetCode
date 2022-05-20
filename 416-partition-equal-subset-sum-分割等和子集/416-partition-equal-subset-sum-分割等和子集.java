class Solution {
    public boolean canPartition(int[] nums) {
        int sum = 0;
        int half = 0;

        for(int i : nums){
            sum += i;
        }

        if(sum % 2 != 0) return false;

        half = sum/2;
        boolean[] dp = new boolean[half + 1];
        dp[0] = true;
        for(int i = 0; i < nums.length; i++){
            for(int j = half; j >= nums[i]; j--){
                dp[j] |= dp[j - nums[i]];
            }
        }
        return dp[half];
    }
}
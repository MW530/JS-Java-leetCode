class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0;
        int right = 0;
        int res = Integer.MAX_VALUE;
        int sum = 0;
        for(; right < nums.length; right++) {
        	sum += nums[right];
        	while(sum >= target) {
        		res = res < right-left + 1 ? res : right-left + 1;
        		sum -= nums[left++];
        	}
        }
        return res == Integer.MAX_VALUE ? 0 : res;
    }
}
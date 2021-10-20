class Solution {
    public int minMoves(int[] nums) {
        int res = 0;
        int min = Arrays.stream(nums).min().getAsInt();
        int len = nums.length;
        for(int i =0; i < len; i++){
            res += (nums[i] - min);
        }
        return res;
    }
}

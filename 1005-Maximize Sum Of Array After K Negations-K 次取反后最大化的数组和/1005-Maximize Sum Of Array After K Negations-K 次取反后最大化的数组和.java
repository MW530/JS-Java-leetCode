class Solution {
    public int largestSumAfterKNegations(int[] nums, int K) {
    int res = 0;
    Arrays.sort(nums);
    for(int i = 0; i < nums.length && K > 0; i++){
        if(nums[i] <= 0){
            nums[i] = -nums[i];
            K--;
        }else{
            K = K % 2 == 1 ? 1 : 0;
            break;
        }
    }
    Arrays.sort(nums);
    if(K == 1)nums[0] = -nums[0];
    for(int i = 0; i < nums.length; i++){
        res += nums[i];
    }
    return res;
    }
}
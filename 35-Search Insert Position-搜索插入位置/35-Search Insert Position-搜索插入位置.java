class Solution {
    public int searchInsert(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int mid = 0;
        while(left <= right) {
        	mid = (left + right) / 2;
        	if(target > nums[mid]) {
            	left = mid + 1;
            }else if(target < nums[mid]){
            	right = mid - 1;
            }else{
                return mid;
            }
        }
        return left;
    }
}

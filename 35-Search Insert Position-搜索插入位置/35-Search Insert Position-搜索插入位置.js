/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let mid = 0;
        while(left <= right) {
        	mid = Math.floor((left + right) / 2);
        	if(target > nums[mid]) {
            	left = mid + 1;
            }else if(target < nums[mid]){
            	right = mid - 1;
            }else{
                return mid;
            }
        }
        return left;
};

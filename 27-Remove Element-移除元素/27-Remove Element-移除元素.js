/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length
    let j = 0
    for(let i = 0; i < len; i++){
        /*
            实际上模拟一下可以发现分为三部分:
            1. nums[i] != val && nums[j] != val
            2. nums[i] ==val && nums[j] == val
            3. nums[i] != val && nums[j] == val
            其中1，3可以合并为nums[i] != val，因为这种情况下都是将后指针的值赋值给前指针
         */
        if (nums[i] != val) {
            nums[j++] = nums[i];
        }
    }
    return j 
};

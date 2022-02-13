/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let right = 0
    let res = Infinity
    let sum = 0
    for(; right < nums.length; right++){
        sum += nums[right]
        while(sum >= target){
            res = Math.min(res, right - left + 1)
            sum -= nums[left++]
        }
    }
    return isFinite(res) ? res : 0
};
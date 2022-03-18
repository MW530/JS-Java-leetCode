/**
 * 贪心解法
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sum = -Infinity
    let count = 0

    for(let i = 0; i < nums.length; i++){
        count += nums[i]
        sum = Math.max(sum, count)
        count = count < 0 ? 0 : count
    }
    return sum
};
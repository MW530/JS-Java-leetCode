/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    let sum = 0
    for(let n of nums) sum += n
    if((target + sum) % 2 !== 0) return 0
    let x = (target + sum) >> 1
    x = Math.abs(x)
    let dp = Array(x + 1).fill(0)
    dp[0] = 1
    for(let i = 0; i < nums.length; i++){
        for(let j = x; j >= nums[i]; j--){
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[x]
};
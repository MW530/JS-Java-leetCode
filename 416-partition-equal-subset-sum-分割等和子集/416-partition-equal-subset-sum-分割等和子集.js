/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let dp = Array(10001).fill(0)
    let sum = 0
    let half = 0
    for(let num of nums){
        sum += num
    }
    // 如果和为奇数则必定不可能分为相等的两部分    
    if(sum % 2 !== 0) return false
    
    half = sum/2

    //  01背包
    for(let i = 0; i < nums.length; i++){
        for(let j = half; j >= nums[i]; j--){
            dp[j] = Math.max(dp[j], dp[j - nums[i]]+nums[i])
        }
    }
    // console.log(dp)
    if(dp[half] === half) return true
    return false
};
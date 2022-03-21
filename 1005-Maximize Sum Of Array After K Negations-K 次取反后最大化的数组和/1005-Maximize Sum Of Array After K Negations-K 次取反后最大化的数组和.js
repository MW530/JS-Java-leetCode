/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var largestSumAfterKNegations = function(nums, k) {
    let res = 0
    nums.sort((a,b)=>a-b)
    for(let i = 0; i < nums.length && k > 0; i++){
        if(nums[i] <= 0){
            nums[i] = -nums[i]
            k--
        }else{
            k = k % 2 === 1 ? 1 : 0
            break
        }
    }
    nums.sort((a,b)=>a-b)
    if(k === 1)nums[0] = -nums[0]
    for(let i = 0; i < nums.length; i++){
        res += nums[i]
    }
    return res
};
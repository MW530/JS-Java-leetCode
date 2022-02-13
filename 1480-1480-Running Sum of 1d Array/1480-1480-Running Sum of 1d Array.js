/**
 * @param {number[]} nums
 * @return {number[]}
 */

//法一：不修改元素组，空间复杂度高
var runningSum = function(nums) {
    let res = []
    res.push(nums[0])
    for(let i = 0; i < nums.length - 1; i++){
        res.push(res[i]+nums[i+1])
    }
    return res
};

//法二：修改元素组，空间复杂度低
var runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++){
        nums[i] = (nums[i-1]+nums[i])
    }
    return nums
};

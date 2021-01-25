/**
 * @param {number[]} nums
 * @return {number[]}
 */

//��һ�����޸�Ԫ���飬�ռ临�Ӷȸ�
var runningSum = function(nums) {
    let res = []
    res.push(nums[0])
    for(let i = 0; i < nums.length - 1; i++){
        res.push(res[i]+nums[i+1])
    }
    return res
};

//�������޸�Ԫ���飬�ռ临�Ӷȵ�
var runningSum = function(nums) {
    for(let i = 1; i < nums.length; i++){
        nums[i] = (nums[i-1]+nums[i])
    }
    return nums
};

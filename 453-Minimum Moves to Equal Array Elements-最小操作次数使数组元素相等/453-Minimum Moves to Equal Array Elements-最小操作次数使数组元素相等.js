/**
 * @param {number[]} nums
 * @return {number}
 * ����˼ά̫��Ҫ�ˣ�n-1��Ԫ��+1 = 1��Ԫ�ؼ�1
 */
var minMoves = function(nums) {
    let res = 0
    let min = Math.min(...nums)
    let len = nums.length
    for(let i =0; i < len; i++){
        res += (nums[i] - min)
    }
    return res
};

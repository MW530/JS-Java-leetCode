/**
 * @param {number[]} nums
 * @return {number}
 * 逆向思维太重要了，n-1个元素+1 = 1个元素减1
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

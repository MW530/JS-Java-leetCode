/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    return biSearch(nums, target, 0, nums.length - 1)
};

const biSearch = function(nums, target, left, right){
    if(left > right) return -1
    const mid = Math.floor((left + right) / 2)
    if(nums[mid] == target){
        return mid
    }else if(nums[mid] > target){
        return biSearch(nums, target, left, mid - 1)
    }else{
        return biSearch(nums, target, mid + 1, right)
    }
}
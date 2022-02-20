
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let set = new Set()
    let index1 = -1;
    let index2 = -1;
    for(let i = 0, len = nums.length; i < len; i++){
        if(set.has(target - nums[i])){
            index1 = i
            break
        }else{
            set.add(nums[i])
        }
    }
    index2 = nums.findIndex((v) => v + nums[index1]=== target)
    return [index1, index2]
};
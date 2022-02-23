/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    let res = []
    let len = nums.length
    nums.sort((a, b) => a-b)

    for(let i = 0; i < len; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue
        for(let j = i + 1; j < len; j++){
            if(j > i + 1 && nums[j] === nums[j - 1]) continue

            let left = j + 1
            let right = len - 1
            while(left < right){
                let amount = nums[i] + nums[j] + nums[left] + nums[right]
                if(amount > target) right--
                else if(amount < target) left++
                else{
                    res.push([nums[i], nums[j], nums[left], nums[right]])

                    while(left < right && nums[right] === nums[right - 1]) right--
                    while(left < right && nums[left] === nums[left + 1]) left++

                    left++
                    right--
                }
            }
        }
    }
    return res
};
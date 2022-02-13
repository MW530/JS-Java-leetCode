/**
 * @param {number[]} nums
 * @return {number}
 */

//使用map统计每个数出现的次数，使用c = (n - 1) * n / 2的公式来算
var numIdenticalPairs = function(nums) {
    let map = new Map()
    let res = 0
    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            let temp = map.get(nums[i])
            map.set(nums[i], temp)
        }else{
            map.set(nums[i], 1)
        }
    }
    for(let v of map.values()){
        res += v*(v-1)/2
    }
    return res
};

//直接二重循环遍历
var numIdenticalPairs = function(nums) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                count++
            }
        }
    }
    return count
};

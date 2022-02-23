
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
 var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let temp = 0
    let map = new Map()
    let res = 0
    for(let i of nums1){
        for(let j of nums2){
            let temp = i +j
            if(map.has(temp)){
                map.set(temp, map.get(temp) + 1)
            }else{
                map.set(temp, 1)
            }
        }
    }
    
    for(let k of nums3){
        for(let l of nums4){
            temp = k + l
            if(map.has(0 - temp)){
                res += map.get(0 - temp)
            }
        }
    }
    return res
};
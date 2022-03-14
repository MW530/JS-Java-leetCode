/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let res
 let path = []
 var permute = function(nums) {
     res = []
     backtrace(nums)
     return res
 };
 
 var backtrace = function(nums){
     if(path.length === nums.length){
         res.push(Array.from(path))
         return
     }
 
     for(let i = 0; i < nums.length; i++){
         if(path.includes(nums[i])) continue
         path.push(nums[i])
         backtrace(nums, i + 1)
         path.pop()
     }
 }
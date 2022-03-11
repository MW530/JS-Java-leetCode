/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let res = []
 let path = []
 var subsetsWithDup = function(nums) {
     res = []
     nums.sort()
     backtrace(nums, 0)
     return res
 };
 
 var backtrace = function(nums, index){
     if(index > nums.length) return
     
     res.push(Array.from(path))
 
     for(let i = index; i < nums.length; i++){
         if(i > index && nums[i] === nums[i - 1]) continue
 
         path.push(nums[i])
         backtrace(nums, i + 1)
         path.pop()
     }
 }
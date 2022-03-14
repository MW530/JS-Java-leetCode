/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let res
 let path = []
 let used = []
 var permuteUnique = function(nums) {
     res = []
     nums.sort()
     backtrace(nums)
     return res
 };
 
 var backtrace = function(nums){
     if(path.length === nums.length){
         res.push(Array.from(path))
         return
     }
     for(let i = 0; i < nums.length; i++){
         if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
             continue;
         }
         if (!used[i]) {
             used[i] = true
             path.push(nums[i])
             backtrace(nums)
             path.pop()
             used[i] = false
         }
     }
 }
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let res = []
 let path = []  
 var subsets = function(nums) {
     res = []
     backtrace(nums, 0)
     return res
 };  
 
 var backtrace = function(nums, index){
     if(index > nums.length) return
 
     res.push(Array.from(path))
 
     for(let i = index; i < nums.length; i++){
         path.push(nums[i])
         backtrace(nums, i + 1)
         path.pop()
     }
 }
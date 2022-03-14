/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 let res = []
 let path = []
 var findSubsequences = function(nums) {
     res = []
     backtrace(nums, 0)
     return res
 };
 
 var backtrace = function(nums, index){
     if(index > nums.length) return
 
     if(path.length >= 2) res.push(Array.from(path))
     
     let used = []
 
     for(let i = index; i < nums.length; i++){
         // 同层去重
         if(i > index && used[nums[i]]) continue
         used[nums[i]] = true
         // 排除非递增序列
         if(nums[i] < nums[index - 1]) continue
 
         path.push(nums[i])
         backtrace(nums, i + 1)
         path.pop()
     }
 }
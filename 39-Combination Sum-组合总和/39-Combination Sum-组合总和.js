/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 let res = []
 let path = []
 let sum = 0
 var combinationSum = function(candidates, target) {
     res = []
     backtrace(candidates, target, 0)
     return res
 };
 
 var backtrace = function(candidates, target, index){
     // 关键，终止条件
     if(sum > target){
         return
     }
     if(sum === target){
         res.push(Array.from(path))
         return
     }
 
     for(let i = index; i <  candidates.length; i++){
         path.push(candidates[i])
         sum += candidates[i]
         backtrace(candidates, target, i)
         path.pop()
         sum -= candidates[i]
     }
 }
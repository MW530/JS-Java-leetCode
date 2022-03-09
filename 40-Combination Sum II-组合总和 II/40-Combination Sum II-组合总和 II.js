/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

 let res = []
 let path = []
 let sum = 0
 
 var combinationSum2 = function(candidates, target) {
     res = []
     candidates.sort((a, b) => a-b)
     backtradce(candidates, target, 0)
     return res
 };
 
 let backtradce = function(candidates, target, index){
     if(sum > target) return
     if(sum === target){
         res.push(Array.from(path))
         return
     }
 
     
     for(let i = index; i < candidates.length; i++){
         if(i > index && candidates[i] == candidates[i-1]) continue;
         path.push(candidates[i])
         sum += candidates[i]
         backtradce(candidates, target, i + 1)
         path.pop()
         sum -= candidates[i]
     }
 }
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 let res = []
 let path = []
 
 var combinationSum3 = function(k, n) {
     res = []
     backtrace(k, n, 1)
     return res
 };
 
 var backtrace = function(k, n, index){
     if(path.length === k && sum(path) === n){
         res.push(Array.from(path))
         return
     }
 
     for(let i = index; i <= 9; i++){
         path.push(i)
         backtrace(k, n, i + 1)
         path.pop()
     }
 }
 
 var sum = function(arr){
     return arr.reduce(function(prev, curr, idx, arr){
     return prev + curr;
   });
 }
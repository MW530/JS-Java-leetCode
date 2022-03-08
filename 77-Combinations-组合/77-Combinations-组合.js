/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 let res = []
 let path = []
 var combine = function(n, k) {
     res = []                    // 如果要定义全局变量，则每次测试时要重置，因为leetcode是从一个文件测试所有的案例。
     backtrack(n, k, 1)
     return res
 };
 
 var backtrack = function(n, k, index){
     if(path.length === k){
         res.push(Array.from(path))
         return
     }
 
     for(let i = index; i <= n - (k - path.length) + 1; i++){
         path.push(i)
         backtrack(n, k, i + 1)
         path.pop()
     }
 }
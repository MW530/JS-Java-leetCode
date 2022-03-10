/**
 * @param {string} s
 * @return {string[][]}
 */
 let res = []
 let path = []
 var partition = function(s) {
     res = []
     backtrace(s, 0)
     return res
 };
 
 var backtrace = function(s, index){
     if(index >= s.length){
         res.push(Array.from(path))
         return
     }
 
     for(let i = index; i < s.length; i++){
         let str = s.substring(index, i + 1)
         if(isPalindrome(str)){
             path.push(str)
             backtrace(s, i + 1)
             path.pop()
         }else{
             continue
         }
 
     }
 }
 
 var isPalindrome = function(arr){
     let len = arr.length
     if(len === 0) return false
     if(len === 1) return true
 
     for(let i = 0; i < len; i++){
         if(arr[i] != arr[len - i - 1]){
             return false
         }
     }
     return true
 }
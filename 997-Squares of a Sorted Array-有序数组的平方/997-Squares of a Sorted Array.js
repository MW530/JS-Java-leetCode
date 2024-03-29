/**
 * @param {number[]} A
 * @return {number[]}
 */
 
var sortedSquares = function(A) {

//方法一:代码简单，但算法复杂度更高
  A = A.map((item,index,array) => {
    return item*item;
  })
  A.sort((a,b) => a-b);
  return  A;
 
//方法二:代码复杂，但算法复杂度更低，利用双指针的办法可以减少排序的次数
  A = A.sort((a,b) => a-b);
  let lp = 0;
  let rp = A.length-1;
  let newArray = [];
  while(lp <= rp){
    if(A[lp]*A[lp] <= A[rp]*A[rp]){
      newArray.push(A[rp]*A[rp]);
      rp--;
    }else if(A[lp]*A[lp] > A[rp]*A[rp]){
      newArray.push( A[lp]*A[lp]);
      lp++;
    }
  }
  return newArray.reverse();
};


/**
 * @param {number[]} nums
 * @return {number[]}
 * @description 利用数组的unshift来省去反转操作
 */
 var sortedSquares = function(nums) {
  let left = 0;
  let right = nums.length - 1
  let res = []
  while(left <= right){
      if(nums[left]**2 > nums[right]**2){
          res.unshift(nums[left]**2)
          left++
      }else{
          res.unshift(nums[right]**2)
          right--
      }
  }
  return res
}
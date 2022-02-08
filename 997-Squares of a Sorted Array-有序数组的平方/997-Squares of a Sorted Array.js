/**
 * @param {number[]} A
 * @return {number[]}
 */
 
var sortedSquares = function(A) {

//����һ:����򵥣����㷨���Ӷȸ���
  A = A.map((item,index,array) => {
    return item*item;
  })
  A.sort((a,b) => a-b);
  return  A;
 
//������:���븴�ӣ����㷨���Ӷȸ��ͣ�����˫ָ��İ취���Լ�������Ĵ���
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
 * @description ���������unshift��ʡȥ��ת����
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
class Solution {
    public int[] sortedSquares(int[] A) {

//方法一:代码简单，但算法复杂度更高
      for (int i = 0; i < A.length; i++) {
			  A[i] = A[i]*A[i];
		  }
      Arrays.sort(A,0,A.length);
      return A;

//方法二:代码复杂，但算法复杂度更低，利用双指针的办法可以减少排序的次数
      int lp = 0;
      int rp = A.length-1;
      int index = A.length-1;
      int[] newArray = new int[A.length];
      while(lp <= rp){
        if(A[lp]*A[lp] <= A[rp]*A[rp]){
          newArray[index] = A[rp]*A[rp];
          rp--;
        }else if(A[lp]*A[lp] > A[rp]*A[rp]){
          newArray[index] = A[lp]*A[lp];
          lp++;
        }
        index--;
      }
      return newArray;
    }
}

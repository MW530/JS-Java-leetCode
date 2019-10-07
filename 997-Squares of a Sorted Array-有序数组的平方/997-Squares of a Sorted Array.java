class Solution {
    public int[] sortedSquares(int[] A) {

//����һ:����򵥣����㷨���Ӷȸ���
      for (int i = 0; i < A.length; i++) {
			  A[i] = A[i]*A[i];
		  }
      Arrays.sort(A,0,A.length);
      return A;

//������:���븴�ӣ����㷨���Ӷȸ��ͣ�����˫ָ��İ취���Լ�������Ĵ���
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

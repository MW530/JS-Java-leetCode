//解法一

class Solution {
    public int[][] flipAndInvertImage(int[][] A) {
	    	for (int i = 0; i < A.length; i++) {
			for (int j = 0; j < A[i].length; j++) {
				if(A[i][j] == 1) {
					A[i][j] = 0;
				}else if(A[i][j] == 0) {
					A[i][j] = 1;
				}
			}
			for (int j = 0; j < A[i].length/2; j++) {
				int temp = 0;
				temp = A[i][j];
				A[i][j] = A[i][A[i].length-j-1];
				A[i][A[i].length-j-1] = temp;
			}
		}
    	
    	return A;
}
}

//解法二

class Solution {
    public int[][] flipAndInvertImage(int[][] A) {
	for (int i = 0; i < A.length; i++) {
		int start = 0, end = A[i].length - 1;
		while (start < end) {
			if (A[i][start] != A[i][end]) {
				start++;
				end--;
			} else {
				A[i][start] = A[i][start] == 1 ? 0 : 1;
				A[i][end] = A[i][end] == 1 ? 0 : 1;
				start++;
				end--;
			}
		}
		if (start == end) {
			A[i][start] = A[i][start] == 1 ? 0 : 1;
		}
	}
	return A;
}
}

class Solution {
    public int[][] generateMatrix(int n) {
        int top = 0;
        int bottom = n - 1;
        int left = 0;
        int right = n - 1;
        int num = 1;
        int[][] res = new int[n][n];
        while(num <= n*n){
            for(int i = left; i <= right; i++, num++) res[top][i] = num;
            top++;
            for(int i = top; i <= bottom; i++, num++) res[i][right] = num;
            right--;
            for(int i = right; i >= left; i--, num++) res[bottom][i] = num;
            bottom--;
            for(int i = bottom; i >= top; i--, num++) res[i][left] = num; 
            left++;
        }
        return res;
    }
}
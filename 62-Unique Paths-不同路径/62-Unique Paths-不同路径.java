class Solution {
    public int uniquePaths(int m, int n) {
        int[][] cost = new int[m][n];
        cost[0][0] = 1;
        boolean init = true;
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
            	if(init) {
            		init = false;
            		continue;
            	}
                // 最上一列和最下一列
                if(i == 0 || i == m){
                    cost[i][j] = cost[i][j - 1];
                    continue;
                }

                // 最左一列和最右一列
                if(j == 0 || j == n){
                    cost[i][j] = cost[i - 1][j];
                    continue;
                }

                // 中间的情况
                cost[i][j] = cost[i - 1][j] + cost[i][j - 1];
            }
        }
        return cost[m - 1][n - 1];
    }
}
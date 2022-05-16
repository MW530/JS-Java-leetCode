class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int height = obstacleGrid.length;
        int width = obstacleGrid[0].length;

        int[][] cost = new int[height][width];

        for(int i = 0; i < height; i++){
            for(int j = 0; j < width; j++){
                // 障碍物情况
                if(obstacleGrid[i][j] == 1){
                    cost[i][j] = 0;
                    continue;
                }

                // 0-0位置初始化
                if(i == 0 && j == 0){
                    cost[i][j] = 1;
                    continue;
                }

                // 上面情况
                if(i == 0){
                    cost[i][j] = cost[i][j - 1];
                    continue;
                }

                // 左面情况
                if(j == 0){
                    cost[i][j] = cost[i - 1][j];
                    continue;
                }

                // 普通情况
                cost[i][j] = cost[i - 1][j] + cost[i][j - 1];

            }
        }
        return cost[height - 1][width - 1];
    }
}
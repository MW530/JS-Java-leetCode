var uniquePathsWithObstacles = function(obstacleGrid) {
    let cost = [[]]
    let height = obstacleGrid.length
    let width = obstacleGrid[0].length
    for(let i = 0; i < height; i++){
        // 初始化数组元素
        if(!Array.isArray(cost[i])) cost[i] = []

        for(let j = 0; j < width; j++){
            //障碍物情况
            if(obstacleGrid[i][j] === 1){
                cost[i][j] = 0
                continue
            }

            // 0-0位置情况
            if(i === 0 && j === 0){
                cost[i][j] = 1
                continue
            }

            // 上下边界情况
            if(i === 0){
                cost[i][j] = cost[i][j - 1]
                continue
            }

            // 左右边界情况
            if(j === 0){
                cost[i][j] = cost[i - 1][j]
                continue
            }

            // 普通情况
            cost[i][j] = cost[i - 1][j] + cost[i][j - 1]
        }
    }
    // console.log(cost)
    return cost[height - 1][width - 1]
};
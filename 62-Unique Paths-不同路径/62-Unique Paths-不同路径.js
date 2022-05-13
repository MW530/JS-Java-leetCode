/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let cost = []
    cost.push([])
    cost[0][0] = 1
    let init = true
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(init){
                init = false
                continue
            }

            if(!cost[i]){
                cost[i] = []
            }

            if(i == 0 || i == m){
                cost[i][j] = cost[i][j - 1]
                continue
            }

            if(j == 0 || j == n){
                cost[i][j] = cost[i - 1][j]
                continue
            }

            cost[i][j] = cost[i - 1][j] + cost[i][j - 1]
        }
    }
    return cost[m - 1][n - 1]
};
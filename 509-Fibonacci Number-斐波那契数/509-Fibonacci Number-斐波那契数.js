/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n === 0) return 0
    let dp = [0, 1]
    let temp
    for(let i = 0; i < n - 1; i++){
        temp = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = temp
    } 
    return dp[1]
};
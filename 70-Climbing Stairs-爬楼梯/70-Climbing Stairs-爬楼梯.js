/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let res = [1,1]
    for(let i = 2; i < n + 1; i++){
        const step = res[0] + res[1]
        res[0] = res[1]
        res[1] = step
    }
    return res[1]
};

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {
    let top = 0
    let bottom = n - 1
    let left = 0
    let right = n - 1
    let num = 1
    let res = []
    for(let i = 0; i < n; i++){
        res[i] = []
    }
    while(num <= n*n){
        for(let i = left; i <= right; i++, num++) res[top][i] = num
        top++
        for(let i = top; i <= bottom; i++, num++) res[i][right] = num
        right--
        for(let i = right; i >= left; i--, num++) res[bottom][i] = num
        bottom--
        for(let i = bottom; i >= top; i--, num++) res[i][left] = num
        left++
    }
    return res
};
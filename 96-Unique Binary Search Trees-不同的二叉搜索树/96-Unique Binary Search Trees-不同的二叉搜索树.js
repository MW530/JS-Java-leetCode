/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    // let nums = [1, 1]

    // for(let i = 2; i <= n; i++){
    //     nums[i] = 0
    //     for(let j = 1; j <= i; j++){
    //         nums[i] += nums[i - j] * nums[j - 1]
    //     }
    // }
    // return nums[n]

    let num = 1
    for(let i = 0; i < n; i++){
        num = num * 2 *(2 * i + 1) / (i + 2)
    }
    return num
};
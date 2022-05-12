/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    let arr = [0,0,0]
    for(let i = 2; i <= cost.length; i++){
        arr[0] = arr[1]
        arr[1] = arr[2]
        arr[2] = Math.min(arr[0] + cost[i-2], arr[1] + cost[i - 1])
    }
    return arr[2]
};
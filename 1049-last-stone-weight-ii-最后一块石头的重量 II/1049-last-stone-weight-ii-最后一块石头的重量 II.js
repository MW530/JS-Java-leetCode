/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeightII = function(stones) {
    // 长度为剩余的石头数量
    let sum = 0
    for(let stone of stones){
        sum += stone
    }
    let mid = sum>>1
    let dp = Array(mid + 1).fill(false)
    dp[0] = true
    for(let i = 0; i < stones.length; i++){
        for(let j = mid; j >= stones[i]; j--){
            dp[j] = dp[j] || dp[j - stones[i]]
        }
    }
    for(let i = mid; ; i--){
        if(dp[i]){
            return sum - 2*i
        }
    }
};
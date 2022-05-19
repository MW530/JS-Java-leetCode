/**
 * 
 * @param {Array} weights 
 * @param {Array} values 
 * @param {number} maxCapaccity 
 */

 function backpack01(weights, values, maxCapaccity){
    let cost = []
    
    //先从物品遍历
    for(let i = 0; i < weights.length; i++){
        if(!Array.isArray(cost[i])) cost[i] = []

        // 遍历背包大小
        for(let j = 0; j <= maxCapaccity; j++){
            // 背包大小为0时，价值也必定为0
            if(j === 0){
                cost[i][j] = 0
                continue
            }

            // 只有一个物品时，在背包大于该物品质量时为该物品价值，否则为0
            if(i === 0 ){
                cost[i][j] = j >= weights[i] ? values[i] : 0
                continue
            }

            // 普通情况，当背包容量小于当前物品质量时，则此时最大容量直接为上一个物品的时的容量，否则进行比较
            if(j >= weights[i]){
                cost[i][j] = Math.max(cost[i - 1][j], cost[i - 1][j - weights[i]] + values[i])
            }else{
                cost[i][j] = cost[i - 1][j]
            }
            
        }
    }
    console.log(cost)
}

// backpack01([1, 3, 4], [15, 20, 30], 4)

function backpack01short(weights, values, maxCapaccity){
    // 初始化为背包容量加1，因为要用到0
    let cost = Array(maxCapaccity + 1).fill(0)

    // 必须先遍历物品，因为容量必须倒序遍历，防止侵占上一层数组，使复用失败
    for(let i = 0; i < weights.length; i++){
        // 这里必须倒序遍历，因为某一个位置的cost必须依赖前面的cost，如果从前开始，就会破坏上一层的cost，使复用数组失败。
        for(let j = maxCapaccity ; j >= weights[i - 1]; j--){
            cost[j] = Math.max(cost[j], cost[j - weights[i - 1]] + values[i - 1])
        }
    }

    console.log(cost);
}

backpack01short([1, 3, 4], [15, 20, 30], 4)
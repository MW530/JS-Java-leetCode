/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuit = function(gas, cost) {
    let min = Infinity
    let lossSum = 0

    for(let i = 0; i < gas.length; i++){
        let loss = gas[i] - cost[i]
        lossSum += loss
        min = min < lossSum ? min : lossSum
    }

    if(lossSum < 0) return -1;
    if(min >= 0) return 0

    for(let i = gas.length - 1; i >= 0; i--){
        let loss = gas[i] - cost[i]
        min += loss
        if(min >= 0){
            return i
        }
    }
    return -1
};
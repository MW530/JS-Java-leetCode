 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let max = -1
    for(let i = 0, len = n.length; i < len; i++){
        max = max > parseInt(n[i]) ? max : parseInt(n[i])
        if(max === 9)
            return max
    }
    return max
};

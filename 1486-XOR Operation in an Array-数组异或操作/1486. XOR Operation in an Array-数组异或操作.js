/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let count = 0;
    for(let i = 0; i < n; i++){
        count ^= start + 2*i;
    }
    return count;
};

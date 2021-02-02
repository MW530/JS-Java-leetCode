/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let res = []
    res.push(first)
    for(let i = 1; i < encoded.length + 1; i++){
        res.push(res[i -1] ^ encoded[ i - 1])
    }
    return res
};

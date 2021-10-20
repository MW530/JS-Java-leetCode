/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let numTokens = s.match(/\d+/g)
    let last = numTokens[0]
    let len = numTokens.length
    for(let i = 1; i < len; i++){
        if(Number.parseInt(last) >= Number.parseInt(numTokens[i])){
            return false
        }
        last = numTokens[i]
    }
    return true
};

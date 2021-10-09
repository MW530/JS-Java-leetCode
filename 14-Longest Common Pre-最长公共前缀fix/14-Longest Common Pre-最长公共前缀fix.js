/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = ''
    const sortedStrs = strs.sort()
    const aryLen = sortedStrs.length
    const minLen = Math.min(sortedStrs[0].length, sortedStrs[aryLen - 1].length)
    for(i = 0; i < minLen; i++){
        if(sortedStrs[0][i] === sortedStrs[aryLen - 1][i]){
            res += sortedStrs[0][i]
        }else{
            return res
        }
    }
    return res
};

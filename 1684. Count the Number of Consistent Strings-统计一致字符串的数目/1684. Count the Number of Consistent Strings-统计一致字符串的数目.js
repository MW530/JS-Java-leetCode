/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let res = 0;
    for(let i = 0, len = words.length; i < len; i++){
        let flag = true
        for(let j = 0, ilen = words[i].length; j < ilen; j++){
            if(!allowed.includes(words[i][j])){
                flag = false
                break
            }
        }
        if(flag){
            res++
        }
    }
    return res
};

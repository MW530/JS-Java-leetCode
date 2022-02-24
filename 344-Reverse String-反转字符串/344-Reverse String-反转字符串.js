/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let temp
    for(let i = 0, len = s.length; i < len/2; i++){
        temp = s[i]
        s[i] = s[len - 1 - i]
        s[len - 1 - i] = temp
    }
};
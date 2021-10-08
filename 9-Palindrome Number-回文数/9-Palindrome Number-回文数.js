/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let s = String(x)
    let len = s.length
    for(i = 0; i < Math.floor(len / 2); i++){
        if(s[i] !== s[len - i - 1]){
            return false
        }
    }
    return true
};

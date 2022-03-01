/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    if(s.length === 0) return false
    let next = getNext(s)
    let len = s.length
    if (next[len - 1] != -1 && len % (len - (next[len - 1] + 1)) == 0) {
        return true;
    }
    return false
};

var getNext = function(s){
    let len = s.length
    let j = -1
    let next = [j]

    for(let i = 1; i < len; i++){
        while(j >= 0 && s[i] !== s[j + 1]){
            j = next[j]
        }
        if(s[i] === s[j+1]){
            j++
        }
        next[i] = j
    }
    return next;
}
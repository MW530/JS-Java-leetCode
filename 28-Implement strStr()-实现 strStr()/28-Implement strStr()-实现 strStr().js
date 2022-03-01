/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0
    let j = -1
    let len = haystack.length
    let next = getNext(needle)
    for(let i = 0; i < len; i++){
        while(j >= 0 &&  haystack[i] !== needle[j + 1]){
            j = next[j]
        }
        if(haystack[i] === needle[j + 1]){
            j++
        }
        if(j + 1 === needle.length){
            return i - needle.length + 1
        }
    }
    return -1
};

var getNext = function(needle){
    let len = needle.length
    let j = -1
    let next = [j]
    for(let i = 1; i < len; i++){
        while(j >= 0 && needle[i] !== needle[j + 1]){
            j = next[j]
        }
        if(needle[i] === needle[j + 1]){
            j++
        }
        next[i] = j
    }
    return next
}
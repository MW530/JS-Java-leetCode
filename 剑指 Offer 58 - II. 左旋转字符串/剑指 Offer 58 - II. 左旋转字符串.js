/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    let len = s.length
    let arr = []
    for(let i = n ; i < len; i++){
        arr.push(s[i])
    }

    for(let i = 0; i < n; i++){
        arr.push(s[i])
    }
    return arr.join("")
};
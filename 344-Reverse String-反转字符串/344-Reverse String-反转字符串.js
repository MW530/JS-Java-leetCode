/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let sArr = s.split('')
    let len = s.length
    let i
    for(i = 0; i < s.length; i = i + 2 * k){
        revertPart(sArr, i, i + k)
    }
    if(len - i < k){
        revertPart(sArr, i, len)
    }else{
        revertPart(sArr, i, i + k)
    }
    return sArr.join('')
};

var revertPart = function(sArr, start, end){
    let temp
    let count = end + start - 1
    for(let j = start; j < count / 2; j++){
        temp = sArr[j]
        sArr[j] = sArr[count - j]
        sArr[count - j] = temp
    }
}


let res = reverseStr("abcdefg", 2)
console.log(res)
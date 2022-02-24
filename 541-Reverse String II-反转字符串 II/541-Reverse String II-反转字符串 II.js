/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
    let sArr = s.split('')
    let len = s.length
    let i
    //每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
    for(i = 0; i < s.length; i = i + 2 * k){
        revertPart(sArr, i, i + k)
    }
    
    if(len - i < k){                    //如果剩余字符少于 k 个，则将剩余字符全部反转。
        revertPart(sArr, i, len)
    }else{                              //如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
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
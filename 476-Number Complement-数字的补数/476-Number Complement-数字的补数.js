/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = ten2tow(num)
    let len = binary.length
    let newBi = ''
    for(let i = 0; i < len; i++){
        newBi += binary[i] === '0' ? '1' : '0'
    }
    return two2ten(newBi)
};

let two2ten = function(biNum){
    let len = biNum.length
    let count = 0
    let res = 0
    for(let i = len - 1; i >= 0; i--){
        res += parseInt(biNum[i]) * Math.pow(2, count)
        count++
    }
    return res
}

let ten2tow = function(tenNum){
    debugger
    let divisor = tenNum
    let res = ''
    while(divisor !== 1){
        let remain = divisor % 2
        divisor = Math.floor(divisor / 2)
        res = String(remain) + res
    }
    return 1 + res
}

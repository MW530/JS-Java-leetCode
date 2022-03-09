/**
 * @param {string} digits
 * @return {string[]}
 */
 let res = []
 let path = []
 let reflectTable = {
    '0':[],
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
 }
var letterCombinations = function(digits) {
    res = []
    if(digits.length === 0) return res
    backtrace(digits, 0)
    return res
};

var backtrace = function(digits, index){
    if(path.length === digits.length){
        res.push(path.join(""))
        return
    }

    let curArr = reflectTable[digits[index]]
    for(let i = 0; i < curArr.length; i++){
        path.push(curArr[i])
        backtrace(digits, index + 1)
        path.pop()
    }
}
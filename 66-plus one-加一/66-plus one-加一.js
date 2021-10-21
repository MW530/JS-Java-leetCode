/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     let carry = 0
//     let len = digits.length
//     for(let i = len - 1; i >= 0; i--){
//         //第一位可以放在循环外处理    
//         if(i === 0){
//             let sum
//             if(len === 1){
//                 sum = digits[i] + carry + 1
//             }else{
//                 sum = digits[i] + carry
//             }
//             carry =  Math.floor((sum) / 10)
//             digits[i] = (sum) % 10
//             if(carry !== 0){
//                 digits.unshift(carry)
//             }
//             continue
//         }
//         //最后一位的时候可以初始化carry为1解决
//         if(i === len - 1){
//             let sum = digits[i] + 1
//             carry = Math.floor(sum / 10)
//             digits[i] = (sum) % 10
//         }else{
//             let sum = digits[i] + carry
//             carry =  Math.floor((sum) / 10)
//             digits[i] = (sum) % 10
//         }
//     }
//     return digits
// };

var plusOne = function(digits) {
    let carry = 1
    let len = digits.length
    for(let i = len - 1; i >= 0; i--){
        let sum = digits[i] + carry
        carry =  Math.floor((sum) / 10)
        digits[i] = (sum) % 10
    }
    if(carry !== 0){
        digits.unshift(carry)
    }
    return digits
};

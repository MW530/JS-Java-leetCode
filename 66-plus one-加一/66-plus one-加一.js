/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     let carry = 0
//     let len = digits.length
//     for(let i = len - 1; i >= 0; i--){
//         //��һλ���Է���ѭ���⴦��    
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
//         //���һλ��ʱ����Գ�ʼ��carryΪ1���
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

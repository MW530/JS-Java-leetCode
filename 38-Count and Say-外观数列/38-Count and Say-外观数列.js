var countAndSay = function(n) {
    let prev = "1"
    for(let i = 1; i < n; i++){
        let temp = ""
        let prevString = String(prev)
        let lastCount = ""
        let lastNumber = ""
        /*注意这里要移动到len的下一位，不然需要对最后一位做特判，这一点一定要记住，即遍历数组做统计的时候，指针一定要移动到最后一位的后一位，否则最后一位会被漏掉。
        因为运行到最后一位之后开始执行前一位的操作，然后重新赋值，然后i++，发现已经超过了for的范围，此时最后一位就被漏掉了。
        */
        let len = prevString.length
        for(let j = 0; j <= len; j++){
            if(lastNumber !== prevString[j]){
                temp += String(lastCount) + String(lastNumber)
                lastCount = 1
                lastNumber = prevString[j]
            }else{
                lastCount++
                lastNumber = prevString[j]
            }
        }
        prev = temp
    }
    return prev
}

// /**
//  * @param {number} n
//  * @return {string}
//  */
//  var countAndSay = function(n) {
//     let prev = "1"
//     for(let i = 1; i < n; i++){
//         let prevString = String(prev)
//         let cur = ''
//         debugger
//         let len = prevString.length
//         for(let j = 0; j < len; ){
//             let k = j + 1
//             while(k < len && prevString[j] === prevString[k]){
//                 k++
//             }
//             cur += String(k - j) + prevString[j]
//             j = k
//         }
//         prev = cur
//     }
//     return prev
// }
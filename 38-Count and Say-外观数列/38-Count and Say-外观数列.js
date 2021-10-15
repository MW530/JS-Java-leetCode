// var countAndSay = function(n) {
//     let prev = "1"
//     for(let i = 1; i < n; i++){
//         let temp = ""
//         let prevString = String(prev)
//         let lastCount = ""
//         let lastNumber = ""
//         for(let j = 0; j < prevString.length; j++){
//             if(j === prevString.length - 1){
//                 if(lastNumber !== prevString[j]){
//                     temp +=String(lastCount) + String(lastNumber) + String(1) + String(prevString[j])
//                 }else{
//                     temp += String(lastCount + 1) + String(lastNumber)
//                 }
//                 continue
//             }
//             if(lastNumber !== prevString[j]){
//                 temp += String(lastCount) + String(lastNumber)
//                 lastCount = 1
//                 lastNumber = prevString[j]
//             }else{
//                 lastCount++
//                 lastNumber = prevString[j]
//             }
//         }
//         prev = temp
//     }
//     return prev
// }

/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    let prev = "1"
    for(let i = 1; i < n; i++){
        let prevString = String(prev)
        let cur = ''
        debugger
        let len = prevString.length
        for(let j = 0; j < len; ){
            let k = j + 1
            while(k < len && prevString[j] === prevString[k]){
                k++
            }
            cur += String(k - j) + prevString[j]
            j = k
        }
        prev = cur
    }
    return prev
}

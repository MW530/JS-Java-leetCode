/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    // let count = 0
    // for(let i = 1; ;i++){
    //     count += i
    //     // console.log(count)
    //     if(count <= n && count + i +1 > n){
    //         return i
    //     }
    // }
    return Math.floor((-1 + Math.sqrt(1 + 8 * n))/2)
};

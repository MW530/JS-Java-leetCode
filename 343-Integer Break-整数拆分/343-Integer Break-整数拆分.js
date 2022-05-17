/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function(n) {

    if(n < 4) return n - 1

    let equa = Math.floor(n / 3)
    let remain = n % 3

    if(remain === 0){
        return 3**equa
    }else if(remain == 1){
        return 3**(equa-1) * 4
    }else{
        return 3**equa * 2
    }
};
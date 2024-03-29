
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let set = new Set()
    while(true){
        powNum = digitSquare(n)
        if(powNum === 1){
            return true
        }
        if(set.has(powNum)){
            return false
        }else{
            set.add(powNum)
        }
        n = powNum
    }
};

var digitSquare = function(n){
    let sum = 0
    while(n !== 0){
        let digit = n%10
        sum += digit**2
        n = Math.floor(n/10)
    }
    return sum
}
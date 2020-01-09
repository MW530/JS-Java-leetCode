function Fibonacci(n)
{
    // write code here
    if(n === 0){
        return 0
    }
    if(n === 1){
        return 1
    }
    let pre0 = 0
    let pre1 = 1
    let res = 0
    for(let i = 2; i <= n; i++){
        res = pre0 + pre1
        pre0 = pre1
        pre1 = res
    }
    return res
}

module.exports = {
    Fibonacci : Fibonacci
};

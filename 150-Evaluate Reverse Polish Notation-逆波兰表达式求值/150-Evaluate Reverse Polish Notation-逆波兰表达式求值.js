/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let stack = []
    const op = {
        "+": (op1, op2) => op2+op1,
        "-": (op1, op2) => op2-op1,
        "*": (op1, op2) => op2*op1,
        "/": (op1, op2) => op2/op1 | 0,
    }
    for(let token of tokens){
        if(Object.keys(op).includes(token)){
            stack.push(op[token](stack.pop(), stack.pop()))
        }else{
            stack.push(Number(token))
        }
    }
    return String(stack.pop())
};
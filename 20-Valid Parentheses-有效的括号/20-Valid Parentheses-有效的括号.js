/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const left = [
        "(",
        "{",
        "["
    ]
    const right = [
        ")",
        "}",
        "]"
    ]

    let stack = []
    let len = s.length
    for(let i = 0; i < len; i++){
        if(left.includes(s[i])){
            stack.push(s[i])
        }else{
            const c = stack.pop()
            let lp = left.indexOf(c)
            let rp = right.indexOf(s[i])
            if(rp !== lp){
                return false
            }
        }
    }
    return stack.length === 0 ? true : false
};

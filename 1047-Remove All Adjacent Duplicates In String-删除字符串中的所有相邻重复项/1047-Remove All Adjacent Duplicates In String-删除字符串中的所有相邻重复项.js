/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    const stack = [];
    for(const x of s) {
        let c = null;
        if(stack.length && x === (c = stack.pop())) continue;
        c && stack.push(c);
        stack.push(x);
    }
    return stack.join("");
};
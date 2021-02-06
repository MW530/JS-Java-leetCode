/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let res = ''
    for(let i = 0, len = command.length; i < len; i++){
        switch(command[i]){
            case 'G':
                res += 'G'
                break
            case '(':
                if(command[i+1] === 'a'){
                    i++
                    res += 'al'
                }else if(command[i+1] === ')'){
                    res += 'o'
                }
                break
        }
    }
    return res
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const prepare = {
        'I': ['V', 'X'],
        'X': ['L', 'C'],
        'C': ['D', 'M']
    }
    let res = 0
    const len = s.length
    for(let i = 0; i < len; i++){
        if(Object.keys(prepare).includes(s[i]) && prepare[s[i]].includes(s[i + 1])){
            res += map[s[i + 1]] -  map[s[i]]
            i++
        }else{
            res += map[s[i]]
        }
    }
    return res
};

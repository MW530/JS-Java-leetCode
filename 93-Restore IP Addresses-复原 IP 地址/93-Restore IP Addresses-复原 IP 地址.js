/**
 * @param {string} s
 * @return {string[]}
 */
 let res = []
 let path = []
var restoreIpAddresses = function(s) {
    res = []
    backtrace(s, 0)
    return res
};

var backtrace = function(s, index){
    if(path.length > 4){
        return
    }
    if(index >= s.length && path.length === 4){
        res.push(path.join("."))
        return
    }

    for(let i = index; i < s.length; i++){
        let str = s.substring(index, i + 1)
        if(isLegalAddress(str)){
            path.push(str)
            backtrace(s, i + 1)
            path.pop()
        }else{
            continue
        }
    }
}

var isLegalAddress = function(str){
    // 空情况
    if(str.length === 0) return false
    // 前导零
    if(String(Number(str)) !== str) return false
    // 普通情况
    if(Number(str) >= 0 && Number(str) <= 255) return true
    else return false
}
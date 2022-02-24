/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    //法一：字符串操作，最费时间
    // let newS = ""
    // for(let i = 0; i < s.length; i++){
    //     if(s[i] === " "){
    //         newS = newS.concat("%20")
    //     }else{
    //         newS = newS.concat(s[i])
    //     }
    // }
    // return newS

    //法二
    // return s.replaceAll(" ", "%20")

    //法三
    let newS = []

    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            newS.push("%20")
        }else{
            newS.push(s[i])
        }
    }
    return newS.join('')
};
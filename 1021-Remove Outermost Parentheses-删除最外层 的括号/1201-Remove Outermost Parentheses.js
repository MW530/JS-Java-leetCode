/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let sArray = S.split('');
    let breakPoint = 0;
    let leftCount = 0;
    let rightCount = 0;
    let res = "";
    sArray.forEach((item,index,array) => {
            if(leftCount !== rightCount || leftCount===0 || rightCount ===0){
                if(item === "("){
                    leftCount++;
                }else if(item === ")"){
                    rightCount++;
                }
                if(leftCount === rightCount){
                    res += sArray.slice(breakPoint+1,index);
                    breakPoint = index+1;
                    leftCount = rightCount =0;
                }
            }
    })
    return res.split(',').join('');
};
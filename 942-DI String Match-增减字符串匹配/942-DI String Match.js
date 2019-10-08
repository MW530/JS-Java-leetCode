/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let maxNum = S.length;
    let minNum = 0;
    let newArray = [];
    for(let i = 0 ;i < S.length ; i++){
      if(S[i] === 'I'){
        newArray.push(minNum);
        minNum++;
      }else if(S[i] === 'D'){
        newArray.push(maxNum);
        maxNum--;
      }
    }
      newArray.push(maxNum)
    return newArray;
};

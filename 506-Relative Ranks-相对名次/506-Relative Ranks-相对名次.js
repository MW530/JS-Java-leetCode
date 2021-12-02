/**
 * @param {number[]} score
 * @return {string[]}
 */
 var findRelativeRanks = function(score) {
    const res = []
    let len = score.length
    // let preScore = JSON.parse(JSON.stringify((score)))
    const preScore = []
    for(let i = 0; i < len; i++){
        preScore[i] = score[i]
    }
    score.sort((a, b) => b-a)
    for(let i = 0; i < len; i++){
        let sortIndex = score.indexOf(preScore[i])
        if(sortIndex  === 0){
            res[i] = "Gold Medal"
        }else if(sortIndex === 1){
            res[i] = "Silver Medal"
        }else if(sortIndex === 2){
            res[i] = "Bronze Medal"
        }else{
            res[i] = String(sortIndex + 1)
        }
    }
    return res;
};

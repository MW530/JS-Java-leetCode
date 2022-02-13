/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = -1
    for(let i = 0; i < accounts.length; i++){
        let temp = 0;
        for(let j = 0; j < accounts[i].length; j++){
            temp += accounts[i][j]
        }
        max = temp > max ? temp : max
    }
    return max
};

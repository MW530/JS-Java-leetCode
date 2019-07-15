//Unoptimizes:
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
let JItem = J.split('');
let SItem = S.split('');
let count = 0;
JItem.forEach((jitem,jindex,jarray)=>{
    SItem.forEach((sitem,sindex,sarray)=>{
            if(jitem == sitem){
                count++;
            }
        })
    })
    return count;
};

//Most optimizes:
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
	let count = 0;
	for(let s of S) {
		if(J.includes(s)) {
			count++;
		}
	}
	return count;
};
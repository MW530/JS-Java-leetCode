/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var oldHeight = heights.slice(0);
    heights.sort((a,b) => a-b)
    let  count = 0;
    for(let i = 0 ; i < heights.length ; i++){
      if(heights[i] != oldHeight[i]) 
      {
        count++;
      }
    }
    return count;
};

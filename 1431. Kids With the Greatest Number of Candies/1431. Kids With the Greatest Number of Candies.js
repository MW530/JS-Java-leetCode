/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//传统写法，复杂度较高
var kidsWithCandies = function(candies, extraCandies) {
 let data = []
 for(let i = 0; i < candies.length; i++){
     data.push(candies[i]+extraCandies)
 }
 for(let i = 0;i < data.length; i++){
     let flag = true
     for(let j = 0; j < candies.length; j++){
         if(data[i] < candies[j]){
             flag =false
             break
         }
     }
     data[i] = flag
 }
 return data
};

//简洁写法，但是会破坏源数据，思路很重要，只用和最大的比较
var kidsWithCandies = function(candies, extraCandies) {
    //查找最多
    let max = -1;
    for(let i = 0; i < candies.length; i++){
        max = max > candies[i] ? max : candies[i]
    }
    // let max = Math.max(...candies)
    for(let i = 0; i < candies.length; i++){
        candies[i] = max - candies[i] > extraCandies ? false : true
    }
    return candies
}

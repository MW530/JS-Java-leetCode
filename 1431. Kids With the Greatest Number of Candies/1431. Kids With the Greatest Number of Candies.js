/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
//��ͳд�������ӶȽϸ�
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

//���д�������ǻ��ƻ�Դ���ݣ�˼·����Ҫ��ֻ�ú����ıȽ�
var kidsWithCandies = function(candies, extraCandies) {
    //�������
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

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let newArray = [];
    for(let i = left ;i <= right ;i++){
      if(i < 10){
        newArray.push(i);
      }else{
        let flag = false;
        flag = i.toString().split("").every((item,index,array) => {
          if(i%Number(item) === 0){
            return true;
          }
        })
        if(flag === true){
          newArray.push(i);
        }
        }
    }
    return newArray;
}

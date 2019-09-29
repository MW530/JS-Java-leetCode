/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  var newArray = [];
    for(let item of A){
      var newItem =  item.reverse();
      for(let i = 0 ; i< newItem.length; i++){
        if(newItem[i] === 0){
          newItem[i] =1;
        }else if(newItem[i] === 1){
          newItem[i] =0;
        }
      }
      newArray.push(newItem);
    }
    return newArray;
};

//方法1（初版）
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var xBi = x.toString(2);
    var yBi = y.toString(2);
    maxLen =  xBi.length > yBi.length ? xBi.length : yBi.length;
    minLen = xBi.length < yBi.length ? xBi.length : yBi.length;
    maxItem = xBi.length > yBi.length ? xBi : yBi;
    if(maxItem === xBi){
      console.log(maxLen-minLen)
      for(let i = 0 ; i < maxLen - minLen ;i++){
        yBi = "0"+yBi;
        console.log("次数："+i);
        console.log(yBi)
      }
    }else{
      console.log(maxLen - xBi.minLen)
      for(let i = 0 ; i < maxLen - minLen ;i++){
        xBi = "0"+xBi;
      }
    }
    console.log(xBi);
    console.log(yBi);
    var xBiArray = xBi.split("");
    var yBiArray = yBi.split("");
    let count = 0;
    console.log(xBiArray);
    console.log(yBiArray);
    for(let i = 0 ; i < xBiArray.length ; i++){
      if(xBiArray[i] != yBiArray[i]){
        count++;
      }
    }
    return count;

//方法2（方法1优化）

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let maxLen = x.toString(2).length>y.toString(2).length ? x.toString(2).length:y.toString(2).length;
  var xBi = x.toString(2).padStart(maxLen,0);
  var yBi = y.toString(2).padStart(maxLen,0);
  var count = 0;
  for(let i = 0 ; i < maxLen ; i++){
    if(xBi[i] !== yBi[i]){
      count++;
    }
  }
  return count;
};

//方法3 （较优）

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let res = (x^y).toString(2);
  let count = 0;
  for(let i = 0 ;i < res.length ; i++){
    if(res[i] === '1'){
      count++;
    }
  }
  return count;
};

//方法4 （最优）

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
let a = x ^ y;
let count = 0;
while(a)
{
if(a % 2)
{
count ++;
}
a = a >> 1;
}
return count;
}

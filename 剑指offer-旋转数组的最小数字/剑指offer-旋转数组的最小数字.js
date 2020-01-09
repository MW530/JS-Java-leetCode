function minNumberInRotateArray(rotateArray)
{
    return Math.min(...rotateArray)
    
    //let min = Infinity
    //for(let i of rotateArray){
    //    min = min > i ? i : min
    //}
    //return min
}
module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    // let i = 0
    // while(arr[i] < arr[i + 1]){
    //     i++
    // }
    // return i
    return arr.indexOf(Math.max(...arr))
};

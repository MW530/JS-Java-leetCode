/**
 * @param {number[]} nums
 * @return {number[]}
 * 摩尔投票法：摩尔投票法的核心思想为对拼消耗。首先我们考虑最基本的摩* * 尔投票问题，比如找出一组数字序列中出现次数大于总数1/2​的数字（并且假 * 设这个数字一定存在）。
 * 可以直接推出：大于1/n（n为数组长度）的元素最多存在n - 1个元素。
 *
 */
// var majorityElement = function(nums) {
//     let map = new Map()
//     let res = []
//     let len = nums.length
//     let max = Math.floor(len / 3)
//     for(let i = 0; i < len; i++){
//         if(map.has(nums[i])){
//             map.set(nums[i], map.get(nums[i]) + 1)
//         }else{
//             map.set(nums[i], 1)
//         }
//     }
//     for(let k of map.keys()){
//         if(map.get(k) > max){
//             res.push(k)
//         }
//     }
//     return res
// };

var majorityElement = function(nums) {
    let element1 = 0;
    let element2 = 0;
    let vote1 = 0;
    let vote2 = 0;

    for (const num of nums) {
        if (vote1 > 0 && num === element1) { //如果该元素为第一个元素，则计数加1
            vote1++;
        } else if (vote2 > 0 && num === element2) { //如果该元素为第二个元素，则计数加1
            vote2++;
        } else if (vote1 === 0) { // 选择第一个元素
            element1 = num;
            vote1++;
        } else if (vote2 === 0) { // 选择第二个元素
            element2 = num;
            vote2++;
        } else { //如果三个元素均不相同，则相互抵消1次
            vote1--;
            vote2--;
        }
    }

    //统计筛选出的元素的数字
    let cnt1 = 0;
    let cnt2 = 0;
    for (const num of nums) {
        if (vote1 > 0 && num === element1) {
            cnt1++;
        }
        if (vote2 > 0 && num === element2) {
            cnt2++;
        }
    }
    // 检测元素出现的次数是否满足要求
    const ans = [];
    if (vote1 > 0 && cnt1 > Math.floor(nums.length / 3)) {
        ans.push(element1);
    }
    if (vote2 > 0 && cnt2 > Math.floor(nums.length / 3)) {
        ans.push(element2);
    }

    return ans;
};

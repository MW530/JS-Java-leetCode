/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let res = []
    let monotonousQueue = []
    if(nums.length === 1) return nums

    for(let i = 0; i < k; i++){
        while(monotonousQueue.length !== 0 && nums[i] > monotonousQueue[monotonousQueue.length - 1]){
            monotonousQueue.pop()
        }
        monotonousQueue.push(nums[i])
    }

    res.push(monotonousQueue[0])

    for(let i = k; i < nums.length; i++){
        // 出队列
        if(monotonousQueue.length !== 0 && nums[i -  k] === monotonousQueue[0]){
            monotonousQueue.shift()
        }

        // 入队列
        while(monotonousQueue.length !== 0 && nums[i] > monotonousQueue[monotonousQueue.length - 1]){
            monotonousQueue.pop()
        }
        monotonousQueue.push(nums[i])

        res.push(monotonousQueue[0])
    }
    return res
};
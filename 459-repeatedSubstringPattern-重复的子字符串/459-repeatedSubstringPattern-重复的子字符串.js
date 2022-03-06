/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    if(s.length === 0) return false
    let next = getNext(s)
    let len = s.length
    if (next[len - 1] != -1 && len % (len - (next[len - 1] + 1)) == 0) {
        return true;
    }
    return false
};

var getNext = function(s){
    let len = s.length
    let j = -1
    let next = [j]

    for(let i = 1; i < len; i++){
        while(j >= 0 && s[i] !== s[j + 1]){
            j = next[j]
        }
        if(s[i] === s[j+1]){
            j++
        }
        next[i] = j
    }
    return next;
}

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
        while(monotonousQueue.length !== 0 && nums[i] > monotonousQueue[0]){
            monotonousQueue.pop()
        }
        monotonousQueue.push(nums[i])
    }

    res.push(monotonousQueue[0])

    for(let i = k; i < nums.length; i++){
        // 出队列
        if(monotonousQueue.length !== 0 && nums[k -  i] === monotonousQueue[0]){
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

res = maxSlidingWindow([1,-1], 1)
console.log(res)
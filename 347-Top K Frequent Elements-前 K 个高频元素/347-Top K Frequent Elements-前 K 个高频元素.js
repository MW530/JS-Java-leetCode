/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const cnt = new Map()
    for (let i = 0; i < nums.length; i ++) {
        cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1)
    }
    const mini = new MinPriorityQueue()
    for (const [key, v] of cnt.entries()) {
        if (mini.size() < k) {
            mini.enqueue(key, v)
        } else {
            if (v > mini.front().priority) {
                mini.dequeue()
                mini.enqueue(key, v)
            }
        }
    }
    return mini.toArray().map((item) => item.element)
}
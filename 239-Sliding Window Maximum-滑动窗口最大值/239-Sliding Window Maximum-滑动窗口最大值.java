class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
    	int len = nums.length;
    	int[] res = new int[len - k + 1];
    	MonotonousQueue monotonousQueue = new MonotonousQueue();
    	for(int i = 0; i < k; i++) {
    		monotonousQueue.add(nums[i]);
    	}
    	res[0] = monotonousQueue.peek();
    	if(res.length == 1) return res;
    	for(int i = k; i < nums.length; i++) {
            monotonousQueue.poll(nums[i - k]);
    		monotonousQueue.add(nums[i]);
    		res[i - k + 1] = monotonousQueue.peek();
    	}
    	return res;
    }
}

public class MonotonousQueue{
	LinkedList<Integer> queue;
	
	public MonotonousQueue() {
		this.queue = new LinkedList<>();
	}



	public void add(int value) {
		while(!queue.isEmpty() && queue.getLast() < value) {
			queue.removeLast();
		}
		queue.add(value);
	}
	
	public void poll(int value) {
		if(!queue.isEmpty() && queue.peek() == value) {
			queue.poll();
		}
	}
	
	public int peek() {
		return queue.peek();
	}
}
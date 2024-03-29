class Solution {
    public int[] topKFrequent(int[] nums, int k) {
    	int[] result = new int[k];
    	HashMap<Integer, Integer> numsMap = new HashMap<>();
    	for(int num : nums) {
    		numsMap.put(num, numsMap.getOrDefault(num, 0) + 1);
    	}
    	Set<Map.Entry<Integer, Integer>> entries = numsMap.entrySet();
    	PriorityQueue<Map.Entry<Integer, Integer>> queue = new PriorityQueue<>((o1, o2) -> o1.getValue() - o2.getValue());
        for (Map.Entry<Integer, Integer> entry : entries) {
            queue.offer(entry);
            if (queue.size() > k) {
                queue.poll();
            }
        }
        for (int i = k - 1; i >= 0; i--) {
            result[i] = queue.poll().getKey();
        }
        return result;
    }
}
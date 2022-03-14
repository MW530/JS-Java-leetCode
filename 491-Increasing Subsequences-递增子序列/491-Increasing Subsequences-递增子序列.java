class Solution {
    private List<List<Integer>> res;
    private LinkedList<Integer> path = new LinkedList<Integer>();
    public List<List<Integer>> findSubsequences(int[] nums) {
        res = new ArrayList<>();
        backtrace(nums, 0);
        return res;
    }

    public void backtrace(int[] nums, int index){
        if(index > nums.length) return;

        if(path.size() >= 2){
            res.add(new ArrayList<Integer>(){{addAll(path);}});
        }

        boolean[] used = new boolean[202];
        for(int i = index; i < nums.length; i++){
            if(index < i && used[nums[i] + 100]) continue;
            used[nums[i] + 100] = true;
            if(path.size() != 0 && nums[i] < path.get(path.size() - 1) ) continue;

            path.add(nums[i]);
            backtrace(nums, i + 1);
            path.removeLast();
        }
    }
}
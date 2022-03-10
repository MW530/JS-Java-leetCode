class Solution {
    public List<List<Integer>> res;
    public LinkedList<Integer> path = new LinkedList<Integer>();

    public List<List<Integer>> subsets(int[] nums) {
        res = new ArrayList<>();
        backtrace(nums, 0);
        return res;
    }

    public void backtrace(int[] nums, int index){
        if(index > nums.length) return;

        res.add(new ArrayList<>(){{addAll(path);}});

        for(int i = index; i < nums.length; i++){
            path.add(nums[i]);
            backtrace(nums, i + 1);
            path.removeLast();
        }
    }
}
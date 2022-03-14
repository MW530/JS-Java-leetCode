class Solution {
    private List<List<Integer>> res;
    private LinkedList<Integer> path = new LinkedList<>();
    boolean[] used = new boolean[10];
    public List<List<Integer>> permuteUnique(int[] nums) {
        res = new ArrayList<>();
        Arrays.sort(nums);
        Arrays.fill(used, false);
        backtrace(nums);
        return res;
    }

    public void backtrace(int[] nums){
        if(path.size() == nums.length){
            res.add(new ArrayList<Integer>(){{addAll(path);}});
            return;
        }

        for(int i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;

            if(!used[i]){
                used[i] = true;
                path.add(nums[i]);
                backtrace(nums);
                path.removeLast();
                used[i] = false;
            }
        }
    }
}
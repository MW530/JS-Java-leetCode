class Solution {
    List<List<Integer>> res;
    LinkedList<Integer> path = new LinkedList<Integer>();
    public List<List<Integer>> permute(int[] nums) {
        res = new ArrayList<>();
        backtrace(nums);
        return res;
    }

    public void backtrace(int[] nums){
        if(path.size() == nums.length){
            res.add(new ArrayList<Integer>(){{addAll(path);}});
            return;
        }

        for(int i = 0; i < nums.length; i++){
            if(path.contains(nums[i])) continue;
            path.add(nums[i]);
            backtrace(nums);
            path.removeLast();
        }
    }
}
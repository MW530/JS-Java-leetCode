class Solution {
    List<List<Integer>> res;
    LinkedList<Integer> path = new LinkedList<>();

    public List<List<Integer>> subsetsWithDup(int[] nums) {
        res = new ArrayList<>();
        Arrays.sort(nums);
        backtrace(nums, 0);
        return res;
    }

    public void backtrace(int[] nums, int index){
        if(index > nums.length) return;

        res.add(new ArrayList<Integer>(){{addAll(path);}});

        for(int i = index; i < nums.length; i++){
            if(i > index && nums[i] == nums[i - 1]) continue;

            path.add(nums[i]);
            backtrace(nums, i + 1);
            path.removeLast();
        }
    }
}
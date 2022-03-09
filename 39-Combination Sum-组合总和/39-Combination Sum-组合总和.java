class Solution {
    public List<List<Integer>> res;
    public int sum;
    public LinkedList<Integer> path;

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        res = new ArrayList<>();
        path = new LinkedList<Integer>();
        backtrace(candidates, target, 0);
        return res;
    }

    public void backtrace(int[] candidates, int target, int index){
        if(sum > target){
            return;
        }
        if(sum == target){
            res.add(new ArrayList<Integer>(){{addAll(path);}});
            return;
        }

        for(int i = index; i < candidates.length; i++){
            path.add(candidates[i]);
            sum += candidates[i];
            backtrace(candidates, target, i);
            path.removeLast();
            sum -= candidates[i];
        }
    }
}
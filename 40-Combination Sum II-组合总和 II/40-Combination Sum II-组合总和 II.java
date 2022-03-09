class Solution {
    public List<List<Integer>> res;
    public int sum;
    public LinkedList<Integer> path;

    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        res = new ArrayList<>();
        path = new LinkedList<Integer>();
        Arrays.sort( candidates );
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
            if(target<candidates[i]) break;
            if(i > index && candidates[i] == candidates[i - 1]) continue;
            path.add(candidates[i]);
            sum += candidates[i];
            backtrace(candidates, target, i + 1);
            path.removeLast();
            sum -= candidates[i];
        }
    }
}
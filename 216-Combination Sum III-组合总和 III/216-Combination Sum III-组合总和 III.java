class Solution {
    private List<List<Integer>> res;
    private int sum;
    private LinkedList<Integer> path = new LinkedList<Integer>();

    public List<List<Integer>> combinationSum3(int k, int n) {
        res = new ArrayList<>();
        sum = 0;
        backtrace(k, n, 1);
        return res;
    }

    public void backtrace(int k, int n, int index){
        if(sum > n){
            return;
        }
        if(path.size() == k){
            if(sum == n){
                res.add(new ArrayList<Integer>(){{addAll(path);}});
            }
            return;
        }

        for(int i = index; i <= 9 - (k - path.size()) + 1; i++){
            path.add(i);
            sum += i;
            backtrace(k, n, i + 1);
            path.removeLast();
            sum -= i;
        }
    } 
}
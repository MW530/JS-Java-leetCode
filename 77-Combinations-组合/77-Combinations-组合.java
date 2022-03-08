class Solution {
    
    private List<List<Integer>> res;
    private LinkedList<Integer> path = new LinkedList<>();
    
    public List<List<Integer>> combine(int n, int k) {
    	res = new ArrayList<>();
    	backtrace(n, k, 1);
    	return res;
    }
    
    public void backtrace(int n, int k, int index) {
    	if(path.size() == k) {
    		res.add(new ArrayList<Integer>() {{addAll(path);}});
            return;
    	}
    	
    	for(int i = index; i <= n - (k - path.size()) + 1; i++) {
    		path.add(i);
    		backtrace(n, k, i + 1);
    		path.removeLast();
    	}
    }
}
class Solution {
    
    private List<List<Integer>> res;
    private LinkedList<Integer> path = new LinkedList<>();
    
    public List<List<Integer>> combine(int n, int k) {
    	res = new ArrayList<>();
    	backtrace(n, k, 1);
    	return res;
    }
    
    public void backtrace(int n, int k, int index) {
        // 每次递归表示第K个数
    	if(path.size() == k) {
    		res.add(new ArrayList<Integer>() {{addAll(path);}});
            return;
    	}
    	
        // 每次循环表示第k个数可能的数的遍历，注意不能重复，所以起始是从上一次的值开始
    	for(int i = index; i <= n - (k - path.size()) + 1; i++) {
    		path.add(i);
    		backtrace(n, k, i + 1);
    		path.removeLast();
    	}
    }
}
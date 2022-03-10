class Solution {
    List<List<String>> res;
    LinkedList<String> path = new LinkedList<String>();
    public List<List<String>> partition(String s) {
    	res = new ArrayList<>();
    	backtrace(s, 0);
    	return res;
    }
    
    public void backtrace(String s, int index) {
    	if(index >= s.length()) {
    		res.add(new ArrayList(path));
    		return;
    	}
    	
    	for(int i = index; i < s.length(); i++) {
    		String str = s.substring(index, i + 1);
    		if(isPalindrome(str)) {
    			path.add(str);
    			backtrace(s, i + 1);
    			path.removeLast();
    		}else {
    			continue;
    		}
    	}
    }
    
    public boolean isPalindrome(String s) {
    	int len = s.length();
    	if(len == 0) return false;
    	if(len == 1) return true;
    	for(int i = 0; i < len; i++) {
    		if(s.charAt(i) != s.charAt(len - i - 1)) {
    			return false;
    		}
    	}
    	return true;
    }
}
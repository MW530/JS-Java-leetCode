class Solution {
    public boolean areNumbersAscending(String s) {
        String[] tokens = s.split(" ");
    	int last = -1;
    	for(int i = 0; i < tokens.length; i++) {
    		try {
    			int num = Integer.parseInt(tokens[i]);
        		if(last >= num) {
        			return false;
        		}
        		last = num;
			} catch (Exception e) {
				// TODO: handle exception
			}
    	}
    	return true;
    }
}

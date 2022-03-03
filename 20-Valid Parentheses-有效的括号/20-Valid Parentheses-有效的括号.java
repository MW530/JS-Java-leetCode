class Solution {
    public boolean isValid(String s) {
    	Stack<Character> stack = new Stack<Character>();
    	ArrayList<Character> left = new ArrayList<Character>();
    	left.add('(');
    	left.add('{');
    	left.add('[');
    	ArrayList<Character> right = new ArrayList<Character>();
    	right.add(')');
    	right.add('}');
    	right.add(']');
    	int len = s.length();
    	for(int i = 0; i < len; i++) {
    		if(left.contains(s.charAt(i))) {
    			stack.push(s.charAt(i));
    		}else {
                if(stack.isEmpty()) {
    				return false;
    			}
    			char l = stack.pop();
    			if(!(left.indexOf(l) == right.indexOf(s.charAt(i)))) {
    				return false;
    			}
    		}
    	}
    	if(!stack.isEmpty()) {
    		return false;
    	}else {
    		return true;
    	}
    }
}
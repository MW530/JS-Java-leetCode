class Solution {
    public String removeOuterParentheses(String S) {
        int count = 0;
		int position = 0;
		String finalString = "";
		char[] Schar = S.toCharArray();
		for(int i = 0; i < S.length();i++) {
			if(Schar[i] == '(') {
				count--;
			}else if(Schar[i] == ')') {
				count++;
			}
			if(count == 0) {
				finalString += S.substring(position+1, i);
				position = i+1;
			}
		}
		return finalString;
    }
}
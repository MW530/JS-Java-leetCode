class Solution {
    public int numJewelsInStones(String J, String S) {
        char[] JItem =  J.toCharArray();
    	char[] SItem =  S.toCharArray();
    	int count = 0;
    	for(char j : JItem) {
    		for(char s : SItem) {
    				if(j == s) {
    					count++;
    				}
    			}
    		}
    	return count;
    }
}

//Also,we can use Array.split('') to split the String like javaScript.
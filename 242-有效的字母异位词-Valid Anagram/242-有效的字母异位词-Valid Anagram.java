class Solution {
    public boolean isAnagram(String s, String t) {
    	int[] records = new int[26];
    	for(char sc : s.toCharArray()) {
    		records[sc - 'a'] += 1;
    	}
    	
    	for(char tc : t.toCharArray()) {
    		records[tc - 'a'] -= 1;
    	}
    	
    	for(int v: records) {
    		if(v != 0) return false;
    	}
    	return true;
    }
}
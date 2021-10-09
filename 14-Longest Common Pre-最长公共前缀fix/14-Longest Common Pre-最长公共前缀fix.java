class Solution {
    public String longestCommonPrefix(String[] strs) {
        int len = strs.length;
        StringBuilder sb = new StringBuilder();
        Arrays.sort(strs);
        int minLen = Math.min(strs[0].length(), strs[len - 1].length());
        for(int i = 0; i < minLen ; i++) {
        	if(strs[0].charAt(i) == strs[len - 1].charAt(i)) {
        		sb.append(strs[0].charAt(i));
        	}else {
        		return sb.toString();
        	}
        }
        return sb.toString();
    }
}

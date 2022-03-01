class Solution {
    public static int[] getNext(String needle) {
    	/**
    	 * 遍历字串的长度
    	 * 	1. 初始化-j=next[0]=-1
    	 * 	2. 处理不相等的情况-循环回退到前一种情况：j=next[j - 1]
    	 * 	3. 相等的情况-next的长度加1：j++
    	 * 	4. 为next赋值
    	 */
    	int j = -1;
    	int len = needle.length();
    	int[] next = new int[len];
    	next[0] = j;
    	for(int i = 1; i < len; i++) {
    		while(j >= 0 && needle.charAt(i) != needle.charAt(j + 1)) {
    			j = next[j];
    		}
    		if(needle.charAt(i) == needle.charAt(j + 1)) {
    			j++;
    		}
    		next[i] = j;
    	}
    	return next;
    }
    
    public int strStr(String haystack, String needle) {
		if(needle.length() == 0) return 0;
		int[] next = getNext(needle);
		
		int j = -1;
		for(int i = 0; i < haystack.length(); i++) {
            while(j>=0 && haystack.charAt(i) != needle.charAt(j+1)){
                j = next[j];
            }
			if(haystack.charAt(i)==needle.charAt(j+1)) {
				j++;
			}
			if(j + 1 == needle.length()) {
				return i-needle.length()+1;
			}
		}
		return -1;
	}
}
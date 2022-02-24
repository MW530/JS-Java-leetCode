class Solution {
    public String reverseStr(String s, int k) {
        char[] sArr = s.toCharArray();
    	int start = 0;
    	int end = 0;
    	for(int i = 0; i < sArr.length; i += 2 * k) {
    		start = i;
    		/*关键：确定尾部指针的位置
    		sArr.length - 1：剩余的数量
    		start + k + 1：k+1个数
    		实际上最后剩余数num->[k, 2k]的操作方式普通的操作方式相同，所以实际上只有两种情况
    		*/
    		end = Math.min(sArr.length - 1, start + k - 1);
    		while(start < end) {
    			//学到了
    			sArr[start] ^= sArr[end];
    			sArr[end] ^= sArr[start];
    			sArr[start] ^= sArr[end];
                start++;
                end--;
    		}
    	}
    	return new String(sArr);
    }
}
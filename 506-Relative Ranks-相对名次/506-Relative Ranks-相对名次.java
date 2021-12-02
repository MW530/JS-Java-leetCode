class Solution {
    public String[] findRelativeRanks(int[] score) {
        int len = score.length;
    	int[][] res = new int[len][2];
    	String[] desc = {"Gold Medal", "Silver Medal", "Bronze Medal"};
    	for(int i = 0; i < len; i++) {
    		res[i][0] = score[i];
    		res[i][1] = i;
    	}	
    	Arrays.sort(res, (a, b) -> b[0] - a[0]);
    	String[] ans = new String[len];
    	for(int i = 0; i < len; i++) {
    		if(i >= 3) {
    			ans[res[i][1]] = Integer.toString(i + 1);
    		}else {
    			ans[res[i][1]] = desc[i];
    		}
    	}
		return ans;
    }
}

class Solution {
    public int heightChecker(int[] heights) {
      int count = 0;
    	int newHeight[] = Arrays.copyOf(heights, heights.length);
      Arrays.sort(heights);
      for (int i = 0; i < newHeight.length; i++) {
        if(heights[i] != newHeight[i]) {
          count++;
        }
		  }
      return count;
    }
}

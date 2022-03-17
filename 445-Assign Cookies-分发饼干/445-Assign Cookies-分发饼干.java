class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);

        int gPoint = 0;
        int sPoint = 0;
        int count = 0;

        while(gPoint < g.length && sPoint < s.length){
            if(g[gPoint] <= s[sPoint]){
                gPoint++;
                count++;
            }
            sPoint++;
        }
        return count;
    }
}
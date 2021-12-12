class Solution {
    public int climbStairs(int n) {
        int[] res = {1,1};
        for(int i = 2; i < n + 1; i++){
            int step = res[0] + res[1];
            res[0] = res[1];
            res[1] = step;
        }
        return res[1];
    }
}

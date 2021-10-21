class Solution {
    public int mySqrt(int x) {
        int l = 0, r = x/3 + 3, ans = -1;
        while (l <= r) {
            int mid = (r + l) / 2;
            if((long)mid * mid == x){
                return mid;
            }
            if ((long)mid * mid < x) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }
}

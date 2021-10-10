class Solution {
    public int arrangeCoins(int n) {
        //8*n在极大值时会移除
        return (int)((-1.0 + Math.sqrt(1 + 8*(long)n)) / 2);
    }
}

class Solution {
    public int arrangeCoins(int n) {
        //8*n�ڼ���ֵʱ���Ƴ�
        return (int)((-1.0 + Math.sqrt(1 + 8*(long)n)) / 2);
    }
}

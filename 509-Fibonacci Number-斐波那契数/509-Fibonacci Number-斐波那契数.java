class Solution {
    public int fib(int n) {
        if(n == 0) return 0;
        int x = 0;
        int y = 1;
        int temp;
        for(int i = 0; i < n - 1; i++){
            temp = x + y;
            x = y;
            y = temp;
        }
        return y;
    }
}
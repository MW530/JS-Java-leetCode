
class Solution {
    private int digitSquare(int n){
        int sum = 0;
        while(n != 0){
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }
    
    public boolean isHappy(int n) {
        int slow = n;
        int fast = digitSquare(n);
        while(fast != 1 && slow != fast){
            slow = digitSquare(slow);
            fast = digitSquare(digitSquare(fast));
        }
        return fast == 1;
    }
}
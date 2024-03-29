class Solution {
    public int[] plusOne(int[] digits) {
        int carry = 1;
        int len = digits.length;
        for(int i = len - 1; i >= 0; i--){
            int sum = digits[i] + carry;
            carry =  (sum) / 10;
            digits[i] = (sum) % 10;
        }
        if(carry != 0){
            digits = new int[digits.length + 1];
            digits[0] = 1;
        }
        return digits;
    }
}

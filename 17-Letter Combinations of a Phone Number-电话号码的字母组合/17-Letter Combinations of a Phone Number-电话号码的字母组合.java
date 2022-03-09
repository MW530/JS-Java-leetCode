class Solution {
    private List<String> res;
    private StringBuilder path = new StringBuilder();
    String[] table = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    public List<String> letterCombinations(String digits) {
        res = new ArrayList<String>();
        if(digits.length() == 0) return res;
        backtrace(digits, 0);
        return res;
    }

    public void backtrace(String digits, int num){
        // 每个递归代表digits中的一个数
        if(path.length() == digits.length()) {
        	res.add(path.toString());
            return;
        }
        
        // 每次循环代表遍历该数对应的码表中的每个数
        String curString = table[digits.charAt(num) - '0'];
        for(int i = 0; i < curString.length(); i++) {
        	path.append(curString.charAt(i));
        	backtrace(digits, num+1);
        	path.deleteCharAt(path.length() - 1);
        }
    }
}
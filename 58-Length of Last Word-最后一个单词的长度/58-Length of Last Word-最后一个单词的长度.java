class Solution {
    // public int lengthOfLastWord(String s) {
    // 	String[] arr = s.split(" ");
    // 	for(int len = arr.length, i = len - 1; i >= 0; i--) {
    // 		if(arr[i] != " ") {
    // 			return arr[i].length();
    // 		}
    // 	}
    // 	return 0;
    // }

        public int lengthOfLastWord(String s) {
        int index = s.length() - 1;
        while (s.charAt(index) == ' ') {
            index--;
        }
        int wordLength = 0;
        while (index >= 0 && s.charAt(index) != ' ') {
            wordLength++;
            index--;
        }
        return wordLength;
    }
}

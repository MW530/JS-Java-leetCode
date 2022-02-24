class Solution {
public static String reverseWords(String s) {
    	/**
    	 * 1. 去除溢出空格
    	 * 2. 反转整个字符串
    	 * 3. 反转单词
    	*/
    	StringBuilder sb = removeSpace(s);
    	reverserSentence(sb, 0, sb.length() - 1);
    	reverseLetter(sb);
    	return sb.toString();
    }
    
    public static StringBuilder removeSpace(String s) {
		int start = 0;
		int end = s.length() - 1;
		StringBuilder sb = new StringBuilder();
		for(int i = 0; i < s.length(); i++) {
			if(s.charAt(i) == ' ') {
				start = i + 1;
			}else {
				break;
			}
		}
		for(int i = s.length() - 1; i >= 0; i--) {
			if(s.charAt(i) == ' ') {
				end = i - 1;
			}else {
				break;
			}
		}
		while (start <= end) {
            char c = s.charAt(start);
            if (c != ' ' || sb.charAt(sb.length() - 1) != ' ') {
                sb.append(c);
            }
            start++;
        }
		return sb;
	}
    
    public static void reverserSentence(StringBuilder sb, int start, int end) {
		while(start < end) {
			char temp = sb.charAt(start);
			sb.setCharAt(start, sb.charAt(end));
			sb.setCharAt(end, temp);
			start++;
			end--;
		}
	}

    public static void reverseLetter(StringBuilder sb) {
		int start = 0;
		int end = 1;
		int n = sb.length();
		while(start < n) {
			while(end < n && sb.charAt(end) != ' ') {
				end++;
			}
			//反转单个单词
			reverserSentence(sb, start, end - 1);
			// 重置start和end
			start = end + 1;
			end = start + 1;
		}
	}
}
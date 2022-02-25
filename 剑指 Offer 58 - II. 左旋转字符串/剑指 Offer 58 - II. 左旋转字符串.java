class Solution {
	public static String reverseLeftWords(String s, int n) {
		StringBuilder sb = new StringBuilder(s);
		int len = s.length();
		reverserSentence(sb, 0, n - 1);
		reverserSentence(sb, n, len - 1);
		reverserSentence(sb, 0, len - 1);
		return sb.toString();
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
}
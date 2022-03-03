// class Solution {
//     public String removeDuplicates(String s) {
//         Stack<Character> stack = new Stack<>();
//     	for (int i = 0; i < s.length(); i++) {
//     		if(stack.isEmpty()) {
//     			stack.add(s.charAt(i));
//     			continue;
//     		}
// 			if(!stack.isEmpty() && stack.peek() != s.charAt(i)) {
// 				stack.add(s.charAt(i));
// 			}else {
// 				stack.pop();
// 			}
// 		}
//     	StringBuilder sb = new StringBuilder();
//     	while(!stack.isEmpty()) {
//     		sb.append(stack.pop());
//     	}
//     	return sb.reverse().toString();
//     }
// }

class Solution {
    public String removeDuplicates(String S) {
        char[] s = S.toCharArray();
        int top = -1;
        for (int i = 0; i < S.length(); i++) {
            if (top == -1 || s[top] != s[i]) {
                s[++top] = s[i];
            } else {
                top--;
            }
        }
        return String.valueOf(s, 0, top + 1);
    }
}
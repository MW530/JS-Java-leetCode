// class Solution {
//     public int evalRPN(String[] tokens) {
//         Stack<String> stack = new Stack<>();
//         List<String> op = new ArrayList<String>() {{
//         	add("+");
//         	add("-");
//         	add("*");
//         	add("/");
//         }};
//         int op1 = -1;
//         int op2 = -1;
//         int res = -1;
//         for (int i = 0; i < tokens.length; i++) {
// 			if(op.contains(tokens[i])) {
// 				op1 = Integer.parseInt(stack.pop());
// 				op2 = Integer.parseInt(stack.pop());
// 				if (tokens[i].equals("+")) {
// 					res = op2 + op1;
// 				}else if(tokens[i].equals("-")) {
// 					res = op2 - op1;
// 				}
// 				else if(tokens[i].equals("*")) {
// 					res = op2 * op1;
// 				}else {
// 					res = op2 / op1;
// 				}
// 				stack.push(String.valueOf(res));
// 			}else {
// 				stack.push(tokens[i]);
// 			}
// 		}
//         return Integer.parseInt(stack.pop());
//     }
// }

class Solution {
    public int evalRPN(String[] tokens) {
        Deque<Integer> stack = new LinkedList();
        for (int i = 0; i < tokens.length; ++i) {
            if ("+".equals(tokens[i])) {        // leetcode 内置jdk的问题，不能使用==判断字符串是否相等
                stack.push(stack.pop() + stack.pop());      // 注意 - 和/ 需要特殊处理
            } else if ("-".equals(tokens[i])) {
                stack.push(-stack.pop() + stack.pop());
            } else if ("*".equals(tokens[i])) {
                stack.push(stack.pop() * stack.pop());
            } else if ("/".equals(tokens[i])) {
                int temp1 = stack.pop();
                int temp2 = stack.pop();
                stack.push(temp2 / temp1);
            } else {
                stack.push(Integer.valueOf(tokens[i]));
            }
        }
        return stack.pop();
    }
}
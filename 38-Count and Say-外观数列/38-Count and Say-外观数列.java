class Solution {
    public String countAndSay(int n) {
        // 初始化边界条件
        String ans = "1";
        // 从第2项到第n项进行描述
        for (int i = 2; i <= n; i++) {
            //记录当前描述项
            String cur = "";
            // 前一项长度
            int m = ans.length();
            for (int j = 0; j < m; ) {
                int k = j+1;
                // 读取前一项相同字符的长度
                while (k < m && ans.charAt(j) == ans.charAt(k)){
                    k++;
                }
                // 相同字符的数量
                int cnt = k - j;
                // 写入描述信息
                cur += cnt+""+ans.charAt(j);
                j = k;
            }
            // 更新数组
            ans = cur;
        }
        // 返回
        return ans;
    }
}

class Solution {
    public String countAndSay(int n) {
        // ��ʼ���߽�����
        String ans = "1";
        // �ӵ�2���n���������
        for (int i = 2; i <= n; i++) {
            //��¼��ǰ������
            String cur = "";
            // ǰһ���
            int m = ans.length();
            for (int j = 0; j < m; ) {
                int k = j+1;
                // ��ȡǰһ����ͬ�ַ��ĳ���
                while (k < m && ans.charAt(j) == ans.charAt(k)){
                    k++;
                }
                // ��ͬ�ַ�������
                int cnt = k - j;
                // д��������Ϣ
                cur += cnt+""+ans.charAt(j);
                j = k;
            }
            // ��������
            ans = cur;
        }
        // ����
        return ans;
    }
}

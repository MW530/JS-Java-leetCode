//��ʽ��

class Solution {
    public List<Integer> grayCode(int n) {
        List<Integer> ret = new ArrayList<Integer>();
        for (int i = 0; i < 1 << n; i++) {
            ret.add((i >> 1) ^ i);
        }
        return ret;
    }
}

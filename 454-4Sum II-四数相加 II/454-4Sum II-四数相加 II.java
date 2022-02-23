class Solution {
    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        int temp = 0;
        Map<Integer, Integer> map = new HashMap<>();
        int res = 0;
        for(int i : nums1){
            for(int j : nums2){
                temp = i + j;
                if(map.containsKey(temp)){
                    map.put(temp, map.get(temp) + 1);
                }else{
                    map.put(temp, 1);
                }
            }
        }
        
        for(int k : nums3){
            for(int l : nums4){
                temp = k + l;
                if(map.containsKey(0 - temp)){
                    res += map.get(0 - temp);
                }
            }
        }
        return res;
    }
}
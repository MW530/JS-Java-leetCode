class Solution {
    public List<String> findRepeatedDnaSequences(String s) {
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        List<String> list = new ArrayList<String>();
        int len = s.length();
        for(int i = 0; i <= len - 10; i++){
            String substring = s.substring(i, i + 10);
            int count = map.get(substring) == null ? 1 : map.get(substring) + 1;
            map.put(substring, count);
        }

        for (Map.Entry<String, Integer> entry: map.entrySet()){
            if(entry.getValue() > 1){
                list.add(entry.getKey());
            }
        }
        
        return list;
    }
}

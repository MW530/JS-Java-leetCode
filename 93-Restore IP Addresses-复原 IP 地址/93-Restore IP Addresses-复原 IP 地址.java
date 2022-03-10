class Solution {
    public List<String> res;
    public LinkedList<String> path = new LinkedList<String>();
    public List<String> restoreIpAddresses(String s) {
        res = new ArrayList<>();
        backtrace(s, 0);
        return res;
    }

    public void backtrace(String s, int index){
        if(path.size() > 4){
            return;
        }

        if(index >= s.length() && path.size() == 4){
            StringBuilder stringBuilder = new StringBuilder();
            path.forEach((String temp) -> {
                stringBuilder.append(temp);
                stringBuilder.append(".");
            });
            stringBuilder.deleteCharAt(stringBuilder.length() - 1);
            res.add(stringBuilder.toString());
        }

        for(int i = index; i < s.length(); i++){
            String str = s.substring(index, i + 1);
            if(isLegalAddress(str)){
                path.add(str);
                backtrace(s, i + 1);
                path.removeLast();
            }else{
                continue;
            }
        }
    }

    public boolean isLegalAddress(String s){
        if(s.length() == 0) return false;
        if(!String.valueOf(Long.parseLong(s)).equals(s)) return false;
        if(Long.parseLong(s) >= 0 && Long.parseLong(s) <= 255) return true;
        else return false;
    }
}
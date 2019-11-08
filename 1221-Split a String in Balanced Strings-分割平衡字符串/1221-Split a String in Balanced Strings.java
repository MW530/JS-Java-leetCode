class Solution {
    public int balancedStringSplit(String s) {
        int mount = 0;
        int count = 0;
        for(int i = 0; i < s.length(); i++){
          if(s.charAt(i) == 'L'){
            mount--;
          }else if(s.charAt(i) == 'R'){
            mount++;
          }
          if(mount == 0){
            count++;
          }
        }
        return count;
    }
}

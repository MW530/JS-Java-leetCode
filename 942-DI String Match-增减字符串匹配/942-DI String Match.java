class Solution {
    public int[] diStringMatch(String S) {
        char s[] = S.toCharArray();
        int minNum = 0;
        int maxNum = S.length();
        int[] newArray = new int[S.length()+1];
        int index = 0 ;
        for(int i = 0 ;i < S.length() ;i++){
          if(s[i] == 'D'){
            newArray[i] = maxNum;
            maxNum--;
          }else{
            newArray[i] = minNum;
            minNum++;
          }
          newArray[i+1] = maxNum;
        }
        return newArray;
    }
}

class Solution {
    public String replaceSpace(String s) {
        // if (s == null) {
        //     return null;
        // }
		// //选用 StringBuilder 单线程使用，比较快，选不选都行
        // StringBuilder sb = new StringBuilder();
		// //使用 sb 逐个复制 str ，碰到空格则替换，否则直接复制
        // for (int i = 0; i < s.length(); i++) {
		// //str.charAt(i) 为 char 类型，为了比较需要将其转为和 " " 相同的字符串类型
        // //if (" ".equals(String.valueOf(str.charAt(i)))){
        //     if (s.charAt(i) == ' ') {
        //         sb.append("%20");
        //     } else {
        //         sb.append(s.charAt(i));
        //     }
        // }
        // return sb.toString();

            if(s == null || s.length() == 0){
        return s;
    }
    //扩充空间，空格数量2倍
    StringBuilder str = new StringBuilder();
    for (int i = 0; i < s.length(); i++) {
        if(s.charAt(i) == ' '){
            str.append("  ");
        }
    }
    //若是没有空格直接返回
    if(str.length() == 0){
        return s;
    }
    //有空格情况 定义两个指针
    int left = s.length() - 1;//左指针：指向原始字符串最后一个位置
    s += str.toString();
    int right = s.length()-1;//右指针：指向扩展字符串的最后一个位置
    char[] chars = s.toCharArray();
    while(left>=0){
        if(chars[left] == ' '){
            chars[right--] = '0';
            chars[right--] = '2';
            chars[right] = '%';
        }else{
            chars[right] = chars[left];
        }
        left--;
        right--;
    }
    return new String(chars);
    }
}
class Solution {
    public int uniqueMorseRepresentations(String[] words) {
      String code[] = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
	      ArrayList<String> codeString = new ArrayList<String>();
	      for (int j = 0; j<words.length;j++) {
	    	  String item = "";
	    	  char itemArray[] = words[j].toCharArray();
			for (int i = 0; i < itemArray.length; i++) {
				item +=code[Character.valueOf(itemArray[i])-97];
			}
			codeString.add(item);
		}
	      ArrayList<String> uniqueArrayList = new ArrayList<String>();
			for (String uniqItem : codeString) {
				if(!uniqueArrayList.contains(uniqItem)) {
					uniqueArrayList.add(uniqItem);
				}
			}
			return uniqueArrayList.size();
    }
}

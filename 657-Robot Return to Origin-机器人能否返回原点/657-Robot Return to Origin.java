class Solution {
    public boolean judgeCircle(String moves) {
      int position = 0;
    	for (int i = 0; i < moves.length(); i++) {
			switch (moves.charAt(i)) {
			case 'U':
				position++;
				break;
			case 'D':
				position--;
				break;
			case 'R':
				position += 10;
				break;
			case 'L':
				position -= 10;
				break;
			}
		}
    	if(position == 0) {
    		return true;
    	}else {
			return false;
		}
    }
}

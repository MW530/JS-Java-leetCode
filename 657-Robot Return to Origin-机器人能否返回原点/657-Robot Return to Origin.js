/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let position = 0;
    for(let item of moves){
      switch(item){
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
    if(position === 0){
      return true;
    }else{
      return false;
    }
};

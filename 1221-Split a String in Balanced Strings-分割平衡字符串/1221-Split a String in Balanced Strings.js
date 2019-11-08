/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  var mount = 0
  var count = 0
  for(let i = 0; i< s.length; i++){
      if(s[i] === 'L') mount--
      else if(s[i] === 'R') mount++
      if(mount === 0) count++
  }
  return count
};

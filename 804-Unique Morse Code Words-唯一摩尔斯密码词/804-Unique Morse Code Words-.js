/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    var codeArray = [];
    var uniqueArray = [];
    for(let word of words){
      var item = "";
      for(let i = 0 ;i<word.length;i++){
        item += code[word[i].charCodeAt()-97];
      }
      codeArray.push(item);
    }
    for(let item of codeArray){
        if(!uniqueArray.includes(item)){
          uniqueArray.push(item);
        }
      }
    return uniqueArray.length;
};

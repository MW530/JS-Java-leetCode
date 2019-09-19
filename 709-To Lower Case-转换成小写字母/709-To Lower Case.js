/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let strArray = str.split("");
  	for(let i = 0;i<strArray.length;i++)
    {
    let charCode = strArray[i].charCodeAt();
      if(charCode >= 65 && charCode <= 90) {
			charCode += 32;
            strArray[i] = String.fromCharCode(charCode);
		}
    }
  return strArray.join("");
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 对于性能要求不高的时候，正则表达式是更简单的处理方法
    // let match = s.match(/\w+/g)
    // return match[match.length - 1].length
    let index = s.length - 1;
    //去除最后的空格
    //这里的思路可以先学习以下，对于一个整体不好处理的元素，可以放在整体外先处理掉，
    //不去影响后面的整体处理
    while (s[index] === ' ') {
        index--;
    }
    let wordLength = 0;
    while (index >= 0 && s[index] !== ' ') {
        wordLength++;
        index--;
    }
    return wordLength;
};

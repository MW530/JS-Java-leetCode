/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // ��������Ҫ�󲻸ߵ�ʱ��������ʽ�Ǹ��򵥵Ĵ�����
    // let match = s.match(/\w+/g)
    // return match[match.length - 1].length
    let index = s.length - 1;
    //ȥ�����Ŀո�
    //�����˼·������ѧϰ���£�����һ�����岻�ô����Ԫ�أ����Է����������ȴ������
    //��ȥӰ���������崦��
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

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const len = s.length
    let res = []
    //����ռ临�Ӷȵͣ���������ʱ��
    // for(let i = 0; i <= len - 10; i++){
    //     let outer = s.slice(i, i + 10)
    //     let count = 0
    //     for(let j = i + 1; j <= len - 10; j++){
    //         let inner = s.slice(j, j + 10)
    //         if(outer === inner){
    //             count++
    //         }
    //     }
    //     if(count > 0){
    //         res.push(outer)
    //     }
    // }
    // return [...new Set(res)]
    //�����ǿռ任ʱ��
    let subStrArr = []
    for(let i = 0; i <= len - 10; i++){
        subStrArr.push(s.slice(i, i + 10))
    }
    let sortArr = subStrArr.sort()
    console.log(sortArr, '����')
    let count = 1
    let last = subStrArr[0]
    let subLen = subStrArr.length
    for(let i = 1; i < subLen; i ++){
        if(sortArr[i] === last){
            count++
        }else if(sortArr[i] !== last && count !== 1){
            res.push(last)
            last = sortArr[i]
            count = 1
        }else{
            last = sortArr[i]
            count = 1
        }

        if(i === subLen - 1 && count !== 1){
            res.push(sortArr[i])
        }
    }
    return res
};

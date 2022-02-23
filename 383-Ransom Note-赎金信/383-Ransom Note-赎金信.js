
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false
    let map = new Map()
    for(let i = 0; i < ransomNote.length; i++){
        if(map.has(ransomNote[i])){
            map.set(ransomNote[i], map.get(ransomNote[i]) + 1)
        }else{
            map.set(ransomNote[i], 1)
        }
    }

    for(let i = 0; i < magazine.length; i++){
        if(map.has(magazine[i])){
            let count = map.get(magazine[i])
            if(count - 1 === 0){
                map.delete(magazine[i])
            }else{
                map.set(magazine[i], count - 1)
            }
        }
    }
   return map.size === 0 ? true : false
};
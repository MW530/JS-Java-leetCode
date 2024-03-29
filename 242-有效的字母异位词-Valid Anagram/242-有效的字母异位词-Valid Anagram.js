
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let l1 = s.length
let l2 = t.length
if(l1 !== l2) return false
let map1 = new Map()
let map2 = new Map()
for(let i = 0; i < l1; i++){
    if(map1.has(s[i])){
        map1.set(s[i], map1.get(s[i]) + 1)
    }else{
         map1.set(s[i], 1)
    }

    if(map2.has(t[i])){
        map2.set(t[i], map2.get(t[i]) + 1)
    }else{
        map2.set(t[i], 1)
    }
}

for(let[k, v] of map1){
    if(map2.get(k) !== v) return false
}

return true
// return s.split("").sort().join() == t.split("").sort().join()
};
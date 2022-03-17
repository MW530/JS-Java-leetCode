/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
    g.sort((a, b) => a-b)
    s.sort((a, b) => a-b)
    let gPint = 0
    let sPoint = 0
    let count = 0
    while(gPint < g.length && sPoint < s.length){
        if(g[gPint] <= s[sPoint]){
            gPint++
            count++
        }
        sPoint++
    }
    return count
};
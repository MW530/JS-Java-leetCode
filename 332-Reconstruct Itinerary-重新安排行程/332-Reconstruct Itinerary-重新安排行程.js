/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 
 var findItinerary = function(tickets) {
    let res = ['JFK']
    let map = {}

    // 统计所有可以的路线
    for(let ticket of tickets){
        if(Object.keys(map).includes(ticket[0])){
            map[ticket[0]] = map[ticket[0]].concat(ticket[1])
        }else{
             map[ticket[0]] = [ticket[1]]
        }
    }

    for (const city in map) {
        // 对到达城市列表排序
        map[city].sort()
    }

    function backtrace(){
        // 城市数量够，路线完成，正确退出
        if(res.length === tickets.length + 1){
            return true;
        }
        
        // 当前其实城市对应的路线数组
        let curCityRoute = map[res[res.length - 1]]

        // map中不存在当前城市其实的路线，则失败退出
        if (!curCityRoute || !curCityRoute.length) {
            return false
        }

        for(let i = 0; i < curCityRoute.length; i++){
            let curTargetCity = curCityRoute[i]
            // 删除已走过航线，防止死循环
            curCityRoute.splice(i, 1)
            res.push(curTargetCity)
            if (backtrace()) {
                return true
            }
            res.pop()
            curCityRoute.splice(i, 0, curTargetCity)
        }
    }
    backtrace()
    return res
};
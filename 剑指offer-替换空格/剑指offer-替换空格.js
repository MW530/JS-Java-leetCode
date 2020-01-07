function replaceSpace(str)
{
    let res = "";
    for(let i in str){
        res += (str[i] === " " ? "%20" : str[i]);
        console.log(res[i])
    }
    return res;
    //return str.replace(/ /g,"%20");
}
module.exports = {
    replaceSpace : replaceSpace
};

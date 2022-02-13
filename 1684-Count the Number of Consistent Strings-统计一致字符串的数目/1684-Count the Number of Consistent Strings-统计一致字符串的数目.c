int countConsistentStrings(char * allowed, char ** words, int wordsSize){
    int res = 0;
    for(int i=0;i<wordsSize;i++){
        bool flag = true;
        for(int j = 0,ilen = strlen(words[i]); j < ilen; j++){
            if(!strchr(allowed,words[i][j])){
                flag = false;
                break;
            }
        }
        if(flag){
            res++;
        }
    }
    return res;
}

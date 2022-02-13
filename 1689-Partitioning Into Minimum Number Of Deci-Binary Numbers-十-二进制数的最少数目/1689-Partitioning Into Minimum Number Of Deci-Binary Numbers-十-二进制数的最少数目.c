int minPartitions(char * n){
    int len = strlen(n);
    int max = -1;
    for(int i = 0; i < len; i++){
        max = max > n[i]-'0' ? max : n[i]-'0';
    }
    return max;
}

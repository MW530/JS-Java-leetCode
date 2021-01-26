/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
bool* kidsWithCandies(int* candies, int candiesSize, int extraCandies, int* returnSize){
    //²éÕÒ×î¶à
    *returnSize = candiesSize;
    bool* res = malloc(candiesSize * sizeof(bool));
    int max = -1;
    for(int i = 0; i < candiesSize; i++){
        max = max > candies[i] ? max : candies[i];
    }
    for(int i = 0; i < candiesSize; i++){
        res[i] = max - candies[i] > extraCandies ? false : true;
    }
    return res;
}

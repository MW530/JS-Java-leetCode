/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* shuffle(int* nums, int numsSize, int n, int* returnSize){
    *returnSize = numsSize;
    int *res = (int *)malloc(sizeof(int)*numsSize);
    int i = 0;
    for(int j = 0; j < n; j++){
        res[i++] = nums[j];
        res[i++] = nums[n + j];
    }
    return res;
}

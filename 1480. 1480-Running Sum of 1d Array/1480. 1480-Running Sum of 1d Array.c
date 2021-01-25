/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

//法一：不修改元素组，空间复杂度高
int* runningSum(int* nums, int numsSize, int* returnSize){
    int* res = malloc(numsSize * sizeof(int));
    * returnSize = numsSize;
    res[0] = nums[0];
    for(int i = 1; i < numsSize; i++){
        res[i] = res[i-1] + nums[i];
    }
    return res;
}

//法一：修改元素组，空间复杂度低
int* runningSum(int* nums, int numsSize, int* returnSize){
    * returnSize = numsSize;
    for(int i = 1; i < numsSize; i++){
        nums[i] = nums[i-1] + nums[i];
    }
    return nums;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

//��һ�����޸�Ԫ���飬�ռ临�Ӷȸ�
int* runningSum(int* nums, int numsSize, int* returnSize){
    int* res = malloc(numsSize * sizeof(int));
    * returnSize = numsSize;
    res[0] = nums[0];
    for(int i = 1; i < numsSize; i++){
        res[i] = res[i-1] + nums[i];
    }
    return res;
}

//��һ���޸�Ԫ���飬�ռ临�Ӷȵ�
int* runningSum(int* nums, int numsSize, int* returnSize){
    * returnSize = numsSize;
    for(int i = 1; i < numsSize; i++){
        nums[i] = nums[i-1] + nums[i];
    }
    return nums;
}

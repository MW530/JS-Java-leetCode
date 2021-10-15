/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length
    let j = 0
    for(let i = 0; i < len; i++){
        /*
            ʵ����ģ��һ�¿��Է��ַ�Ϊ������:
            1. nums[i] != val && nums[j] != val
            2. nums[i] ==val && nums[j] == val
            3. nums[i] != val && nums[j] == val
            ����1��3���Ժϲ�Ϊnums[i] != val����Ϊ��������¶��ǽ���ָ���ֵ��ֵ��ǰָ��
         */
        if (nums[i] != val) {
            nums[j++] = nums[i];
        }
    }
    return j 
};

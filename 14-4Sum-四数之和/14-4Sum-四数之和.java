class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<>();
        int len = nums.length;
        Arrays.sort(nums);
        for(int i = 0; i < len; i++)
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            for(int j = i + 1; j < len; j++){
                if(j > i + 1 && nums[j] == nums[j - 1]) continue;
                
                int left = j + 1;
                int right = len - 1;
                while(left < right){
                    int amount = nums[i] + nums[j] + nums[left] + nums[right];
                    if(amount < target){
                        left++;
                    }else if(amount > target){
                        right--;
                    }else{
                        res.add(Arrays.asList(nums[i], nums[j], nums[left], nums[right]));
                        while(left < right && nums[right] == nums[right - 1]) right--;
                        while(left < right && nums[left] == nums[left + 1]) left++;

                        left++;
                        right--;
                    }
                }
            }
        }
        return res;
    }
}
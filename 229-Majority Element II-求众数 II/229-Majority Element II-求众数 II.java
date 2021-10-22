class Solution {
    // public List<Integer> majorityElement(int[] nums) {
    //     HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
    // 	HashSet<Integer> set = new HashSet<Integer>();
    //     int len = nums.length;
    //     int max = len/3;
    //     for(int i = 0; i < len; i++) {
    //     	if(map.containsKey(nums[i])) {
    //     		map.put(nums[i], map.get(nums[i]) + 1);
    //     	}else {
    //     		map.put(nums[i], 1);
    //     	}
    //     }
    //     for(int key : map.keySet()) {
    //     	if(map.get(key) > max) {
    //     		set.add(key);
    //     	}
    //     }
    //     return new ArrayList<Integer>(set);
    // }

    public List<Integer> majorityElement(int[] nums) {
        int v1 = 0;
    	int v2 = 0;
    	int cnt1 = 0;
    	int cnt2 = 0;
    	int len =nums.length;
    	HashSet<Integer> set = new HashSet<Integer>();
    	for(int i = 0; i < len; i++) {
    		if(nums[i] == v1 && cnt1 > 0) {
    			cnt1++;
    		}else if(nums[i] == v2 & cnt2 > 0) {
    			cnt2++;
    		}else if(cnt1 == 0) {
    			v1 = nums[i];
    			cnt1++;
    		}else if(cnt2 == 0) {
    			v2 = nums[i];
    			cnt2++;
    		}else  {
    			cnt1--;
    			cnt2--;
    		}
    	}
    	
    	int realC1 = 0;
    	int realC2 = 0;
    	for(int i = 0; i < len; i++) {
    		if(v1 == nums[i]) {
    			realC1++;
    		}else if(v2 == nums[i]) {
    			realC2++;
    		}
    	}
    	if(realC1 > len / 3) {
    		set.add(v1);
    	}
    	if(realC2 > len / 3) {
    		set.add(v2);
    	}
    	return new ArrayList<Integer>(set);
    }
}

public static void backpack01(int[] weights, int[] values, int maxCapaccity) {
    int[][] cost = new int[weights.length][maxCapaccity + 1];
    
    for(int i = 0; i < weights.length; i++) {
        for(int j = 0; j <= maxCapaccity; j++) {
            if(j == 0 ) {
                cost[i][j] = 0;
                continue;
            }
            
            if(i == 0) {
                cost[i][j] = j >= weights[i] ? values[i] : 0;
                continue;
            }
            
            if(j < weights[i]) {
                cost[i][j] = cost[i - 1][j];
            }else {
                cost[i][j] = Math.max(cost[i - 1][j], cost[i - 1][j - weights[i]] + values[i]);
            }
        }
    }
    System.out.println(Arrays.toString(cost));
}

public static void backpack01short(int[] weights, int[] values, int maxCapaccity) {
    int[] cost = new int[maxCapaccity + 1];
    
    // 遍历物品
    for(int i = 0; i < weights.length; i++) {
        // 从后向前遍历容量，下限是当前的物品的大小
        for(int j = maxCapaccity; j >= weights[i]; j--) {
            cost[j] = Math.max(cost[j], cost[j - weights[i]]+values[i]);
        }
    }
    
    System.out.println(Arrays.toString(cost));
}
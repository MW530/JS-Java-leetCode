# 二分查找
二分查找可以根据重复元素搜索到的下标分为3类。
其有三个需要注意的点：
- right的初始化
- 循环的跳出条件（是否带等号），这里决定了搜索区间，如果等于，则区间是`[left, right]`，否则区间就是`[left, right)`。
- left, right的改变（是否mid±1）

## 基本类型
基本类型不太关注重复元素搜索到的下标，一般会取得中间位置的那个下标。
其基本算法如下

```java
    int binarySearch(int[] nums, int target) {
    int left = 0; 
    int right = nums.length - 1; // 注意

    while(left <= right) { // 注意
        int mid = (right + left) / 2;
        if(nums[mid] == target)
            return mid; 
        else if (nums[mid] < target)
            left = mid + 1; // 注意
        else if (nums[mid] > target)
            right = mid - 1; // 注意
        }
    return -1;
}
```
注意这里
- `right`被初始化为`nums.length - 1`->所以`nums[right]`是可以取到的->`while`限制条件为`left <= right`。
- 第一步判断了`nums[mid]`->后续`left = mid - 1`，不需要考虑`nums[mid]`了。

## 寻找左边界的二分查找
即当数组中出现重复元素时，在查找整个元素时，会返回其左侧的元素下标。
例如：`nums = [0,2,3,3,3,4]; target = 3;`时，会返回2。

```java
int left_bound(int[] nums, int target) {
    if (nums.length == 0) return -1;
    int left = 0;
    int right = nums.length; // 注意

    while (left < right) { // 注意
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid; // 注意
        }
    }
    return left;
}
```
关键：
- 在于`nums[mid] == target`时的处理`right = mid`。即在遇到匹配的时候，不要立即返回，而是尝试向左缩减区间（即减小right），直到下一次不再匹配。
- 注意这里搜索的区间为`[left, right)`，所以
  - `while`的退出条件中，左不能等于右。
  - 下一次的二分区间为除去`mid`的两个区间：`[left, mid)`或者`[mid + 1, right)`。

## 寻找右侧边界的二分查找
这里与上面的思路基本一致，代码如下：
```java
int right_bound(int[] nums, int target) {
    if (nums.length == 0) return -1;
    int left = 0, right = nums.length;

    while (left < right) {
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            left = mid + 1; // 注意
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    return right - 1; // 注意
}
```

注意：
- 这里的搜索区间还是`[left, right)`，所以right还是访问不了的；左右标签的移动还是一样。
- 关键还是`left = mid + 1;`， 即在匹配到时向右不断缩减区间。
- 返回的是`right - 1`，这里还是因为搜索区间是`[left, right)`，所以右侧是不可达的。
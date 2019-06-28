## 第一题: 两数之和
给定一个整数数组`nums`和一个目标值`target`，请你在该数组中找出和为目标值的那`两个`整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

### 示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```
### 代码实现
```
function twoSum(nums, target) {
  let source = [];
  nums.forEach((item, index, self) => {
    let copyNums = JSON.parse(JSON.stringify(self));
    copyNums.splice(index, 1);
    copyNums.forEach((childItem, childIndex) => {
      if (childItem + item === target) {
        if (childIndex + 1 > index) {
          source.push(index, childIndex + 1)
        }
      }
    })
  });
  return source;
};
function twoSumOptimizeOne(nums, target) {
  let source = [];
  let length = nums.length;
  for(let i = 0;i < length;i++){
    for(let j = i+1;j<length;j++){
      if(nums[i] + nums[j] === target){
        source.push(i,j)
      }
    }
  }
  return source;
};
function twoSumOptimizeTwo(nums, target){
  let tempObj = {};
  let source = [];
  nums.forEach((item,index) => {
    tempObj[item] = index;
  });
  let length = nums.length;
  for(let i = 0;i < length;i++){
    let j = tempObj[target - nums[i]];
    if(j && j !== i){
      source = [i,j];
      break;
    }
  }
  return source;
};
function twoSumOptimizeFinal(nums, target){
  let tempObj = new Map();
  nums.forEach((item,index) => {
    tempObj.set(item,index);
  });
  let length = nums.length;
  for(let i = 0;i < length;i++){
    let j = tempObj.get(target - nums[i]);
    if(j && j !== i){
      return [i,j];
    }
  }
};
module.exports = { twoSum, twoSumOptimizeOne, twoSumOptimizeTwo,twoSumOptimizeFinal};
```
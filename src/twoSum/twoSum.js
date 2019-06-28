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
var twoSum = function(nums,target){
  let source = [];
  nums.forEach((item,index,self) => {
    let copyNums = JSON.parse(JSON.stringify(self));
    copyNums.splice(index,1);
    copyNums.forEach((childItem,childIndex) => {
      if(childItem + item === target){
        if(childIndex + 1 > index){
          source.push(index,childIndex + 1)
        }
      }
    })
  });
  return source;
};
console.log(twoSum([3,3],6))
module.exports = twoSum;
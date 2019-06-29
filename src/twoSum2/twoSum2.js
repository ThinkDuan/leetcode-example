var twoSum = function (numbers, target) {
  let source = {};
  let length = numbers.length;
  let i = 0;
  for (; i < length; i++) {
    let element = numbers[i];
    if (source[target - element] !== void 0) {
      return source;
    }
  }
  return source;
};
export default twoSum;
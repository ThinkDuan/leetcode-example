const twoSum = require('../two-sum/twoSum.js');
test('nums = [2, 7, 11, 15], target = 9,return [0,1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1]);
});
test('nums = [2, 7, 11, 15,10,9], target = 13,return [0,2]', () => {
  expect(twoSum([2, 7, 11, 15,10,9], 13)).toEqual([0,2]);
});
test('nums = [3,3], target = 6,return [0,1]', () => {
  expect(twoSum([3,3], 6)).toEqual([0,1]);
})
test('nums = [3,2,4], target = 6,return [1,2]', () => {
  expect(twoSum([3,2,4], 6)).toEqual([1,2]);
})
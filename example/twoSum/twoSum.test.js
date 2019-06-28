const {twoSum} = require('../../src/twoSum/twoSum');
const {twoSumOptimizeOne} = require('../../src/twoSum/twoSum');
const {twoSumOptimizeTwo} = require('../../src/twoSum/twoSum');
const {twoSumOptimizeFinal} = require('../../src/twoSum/twoSum');
test('twoSum() nums = [2, 7, 11, 15], target = 9,return [0,1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0,1]);
});
test('twoSum() nums = [2, 7, 11, 15,10,9], target = 13,return [0,2]', () => {
  expect(twoSum([2, 7, 11, 15,10,9], 13)).toEqual([0,2]);
});
test('twoSum() nums = [3,3], target = 6,return [0,1]', () => {
  expect(twoSum([3,3], 6)).toEqual([0,1]);
})
test('twoSum() nums = [3,2,4], target = 6,return [1,2]', () => {
  expect(twoSum([3,2,4], 6)).toEqual([1,2]);
})

test('twoSumOptimizeOne() nums = [2, 7, 11, 15], target = 9,return [0,1]', () => {
  expect(twoSumOptimizeOne([2, 7, 11, 15], 9)).toEqual([0,1]);
});
test('twoSumOptimizeOne() nums = [2, 7, 11, 15,10,9], target = 13,return [0,2]', () => {
  expect(twoSumOptimizeOne([2, 7, 11, 15,10,9], 13)).toEqual([0,2]);
});
test('twoSumOptimizeOne() nums = [3,3], target = 6,return [0,1]', () => {
  expect(twoSumOptimizeOne([3,3], 6)).toEqual([0,1]);
})
test('twoSumOptimizeOne() nums = [3,2,4], target = 6,return [1,2]', () => {
  expect(twoSumOptimizeOne([3,2,4], 6)).toEqual([1,2]);
})

test('twoSumOptimizeTwo() nums = [2, 7, 11, 15], target = 9,return [0,1]', () => {
  expect(twoSumOptimizeTwo([2, 7, 11, 15], 9)).toEqual([0,1]);
});
test('twoSumOptimizeTwo() nums = [2, 7, 11, 15,10,9], target = 13,return [0,2]', () => {
  expect(twoSumOptimizeTwo([2, 7, 11, 15,10,9], 13)).toEqual([0,2]);
});
test('twoSumOptimizeTwo() nums = [3,3], target = 6,return [0,1]', () => {
  expect(twoSumOptimizeTwo([3,3], 6)).toEqual([0,1]);
})
test('twoSumOptimizeTwo() nums = [3,2,4], target = 6,return [1,2]', () => {
  expect(twoSumOptimizeTwo([3,2,4], 6)).toEqual([1,2]);
})

test('twoSumOptimizeFinal() nums = [2, 7, 11, 15], target = 9,return [0,1]', () => {
  expect(twoSumOptimizeFinal([2, 7, 11, 15], 9)).toEqual([0,1]);
});
test('twoSumOptimizeFinal() nums = [2, 7, 11, 15,10,9], target = 13,return [0,2]', () => {
  expect(twoSumOptimizeFinal([2, 7, 11, 15,10,9], 13)).toEqual([0,2]);
});
test('twoSumOptimizeFinal() nums = [3,3], target = 6,return [0,1]', () => {
  expect(twoSumOptimizeFinal([3,3], 6)).toEqual([0,1]);
})
test('twoSumOptimizeFinal() nums = [3,2,4], target = 6,return [1,2]', () => {
  expect(twoSumOptimizeFinal([3,2,4], 6)).toEqual([1,2]);
})
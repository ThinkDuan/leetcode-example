let { reverse } = require('../../src/reverse/reverse');
let { reverseOptimize } = require('../../src/reverse/reverse');
test('reverse,123 to 321', () => {
  expect(reverse(123)).toBe(321)
})
test('reverse,120 to 21', () => {
  expect(reverse(120)).toBe(21)
})
test('reverse,321110 to 11123', () => {
  expect(reverse(321110)).toBe(11123)
})
test('reverse,-123 to -321', () => {
  expect(reverse(-123)).toBe(-321)
})
test('reverse,0 to 0', () => {
  expect(reverse(0)).toBe(0)
})
test('reverse,-1230 to -321', () => {
  expect(reverse(-1230)).toBe(-321)
})
//reverseOptimize
test('reverseOptimize,123 to 321', () => {
  expect(reverseOptimize(123)).toBe(321)
})
test('reverseOptimize,120 to 21', () => {
  expect(reverseOptimize(120)).toBe(21)
})
test('reverseOptimize,321110 to 11123', () => {
  expect(reverseOptimize(321110)).toBe(11123)
})
test('reverseOptimize,-123 to -321', () => {
  expect(reverseOptimize(-123)).toBe(-321)
})
test('reverseOptimize,0 to 0', () => {
  expect(reverseOptimize(0)).toBe(0)
})
test('reverseOptimize,-1230 to -321', () => {
  expect(reverseOptimize(-1230)).toBe(-321)
})
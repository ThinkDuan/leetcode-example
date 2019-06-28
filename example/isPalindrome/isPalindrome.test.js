const isPalindropMe = require('../../src/isPalindrome/isPalindrome');
test('isPalindropMe 121 to true',() => {
  expect(isPalindropMe(121)).toBe(true);
});
test('isPalindropMe -121 to false',() => {
  expect(isPalindropMe(-121)).toBe(false);
});
test('isPalindropMe 10 to false',() => {
  expect(isPalindropMe(10)).toBe(false);
});
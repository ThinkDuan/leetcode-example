function reverse(x) {
  let max = Math.pow(2, 31);
  let source = 0;
  if (-max - 1 <= x && x <= max - 1) {
    if (x < 0) {
      x = -x;
      source = Number((x + ' ').split('').reverse().join(''));
      source = -source;
    } else if (x > 0) {
      source = Number((x + ' ').split('').reverse().join(''));
    } else {
      return 0;
    }
  }
  if (-max - 1 <= source && source <= max - 1) {
    return source;
  } else {
    return 0;
  }
}
function reverseOptimize(x) {
  let max = Math.pow(2, 31);
  let source = 0;
  if (-max - 1 <= x && x <= max - 1) {
    if (x < 0) {
      x = -x + ' ';
      source = 0 - reverseString(x);
    } else if (x > 0) {
      source = -(0 - reverseString(x + ''));
    } else {
      return 0;
    }
  }
  if (-max - 1 <= source && source <= max - 1) {
    return source;
  } else {
    return 0;
  }
  function reverseString(string) {
    let length = string.length;
    let reString = '';
    for (let i = length - 1; i > -1; i--) {
      reString += string[i];
    }
    return reString;
  }
}
export default { reverse, reverseOptimize };
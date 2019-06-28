function isPalindrome(x) {
  if (x < 0) {
    return false;
  } else if (x === 0) {
    return true;
  } else {
     let stringX = x+'' ;
     let stringXLength = stringX.length;
     let reverseStringX = '';
     for(let i = stringXLength - 1;i>-1;i--){
      reverseStringX += stringX[i];
     }
     if(x === -(0-reverseStringX)){
       return true;
     } else {
       return false;
     }
  }
}
module.exports = isPalindrome;
function isPalindrome(a) {
  const lowerCaseStr = a.toLowerCase();
  
  const reversedStr = lowerCaseStr.split('').reverse().join('');
  
  return lowerCaseStr === reversedStr;
}

console.log(isPalindrome("ontu")); 
console.log(isPalindrome("oyo"));
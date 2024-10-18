function isPalindrome(word) {
  // Step 1: Reverse the input string
  const reversedWord = word.split('').reverse().join('');

  // Step 2: Compare the reversed string with the original string
  return word === reversedWord;
}

/* 
  Pseudocode:
  1. Take the input string.
  2. Reverse the string using the split-reverse-join method.
  3. Compare the reversed string with the original string.
  4. If they are equal, return true, otherwise return false.
*/

/*
  Written Explanation:
  We reverse the input string and compare it with the original string. If the two strings are identical, the function returns `true`, meaning the word is a palindrome. Otherwise, it returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  // Additional tests
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));
}

module.exports = isPalindrome;

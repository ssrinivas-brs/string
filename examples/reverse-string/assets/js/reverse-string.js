

/**
 * For the given string, returns the reversed string
 * @param String
 * @return String
 */

// Reverse String Algorithm
let reverseString = function (str) {
  // Step 1: Convert the string to an array of characters
  const charArray = str.split("");
  console.log(charArray);
  // Step 2: Initialize two pointers
  let left = 0;
  let right = str.length - 1;

  // Step 3: Swap characters using the two-pointer approach
  while (left < right) {
    // Swap characters
    [charArray[left], charArray[right]] = [charArray[right], charArray[left]];

    // Move the pointers
    left++;
    right--;
  }

  // Step 4: Convert the array back to a string
  const reversedStr = charArray.join("");

  // Step 5: Return the reversed string
  return reversedStr;
};

// Implementation
const str = "hello world";
const reversed = reverseString(str);
console.log(`The reversed string for the given string '${str}' is ${reversed}`);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(n)

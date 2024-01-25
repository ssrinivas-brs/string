/** 
Author : Build Rise Shine 

Created : 2023

Script : Hamming String

Description : write an algorithm for hamming string

    Hamming distance between two strings of equal length is the number of positions at which the 
    corresponding symbols are different. In another way, it measures the minimum number of substitutions
    required to change one string into the other.

(c) Copyright by BRS Studio. 
**/

/**
 * @param String
 * @param String
 * @return Number
 */

// Hamming Algorithm
let hamming = function (a, b) {
  if (a.length !== b.length) {
    throw new Error("Strings must be equal in length");
  }

  let dist = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      dist++;
    }
  }

  return dist;
};

// Implementation
const str1 = "test"; //""
const str2 = "abcd";
const differences = hamming(str1, str2);
console.log(
  `The difference between the string '${str1}' and '${str2}' using Hamming string is ${differences}`
);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(1)

// STEPS
// STEP 1 - Check if the lengths of str1 and str2 are equal. If not, raise an error.
// STEP 2 - Initialize a variable dist to 0 to count the differing characters.
// STEP 3 - Iterate str1 and str2 simultaneously
// STEP 4 - Compare chars at same position in both strings, and increment if they differ
// STEP 5 - finally return dist

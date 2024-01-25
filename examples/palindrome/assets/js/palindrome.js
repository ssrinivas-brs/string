/** 
Author : Build Rise Shine 

Created : 2023

Script : Palindrome

Description : write an algorithm for palindrome

    A palindrome is a word, phrase, number, or sequence of characters that reads the same forward and 
    backward. It exhibits symmetry, with the characters mirroring each other. Palindromes can be found 
    in words like "level" and "radar," or in phrases like "madam". 
    
    They provide a unique pattern that remains unchanged when read in reverse.

(c) Copyright by BRS Studio.
**/

// Palindrome
function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

// Implementation
const str = "abcd"; //str[i] !== str[j]
const palindrome = isPalindrome(str);
if (palindrome) {
  console.log(`The given string '${str}' is a palindrome string`);
} else {
  console.log(`The given string '${str}' is not a palindrome string`);
}

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(1)

//Palindrome
// palindrome - word/phrase/number or other sequence of characters that reads the same forward and backward

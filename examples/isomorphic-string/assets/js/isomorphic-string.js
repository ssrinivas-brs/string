/** 
Author : Build Rise Shine 

Created : 2023

Script : Isomorphic string

Description : write an algorithm for Isomorphic Algorithm

    The Isomorphic algorithm checks if two strings are isomorphic, meaning the characters in one string 
    can be replaced to form the other string while preserving the order. 
    
    It iterates through the characters of both strings simultaneously, mapping each character from one 
    string to its counterpart in the other string. If any inconsistency is found, the strings are not 
    isomorphic. 

(c) Copyright by BRS Studio. 
**/

// Isomorphic Algorithm
function isIsomorphic(str1, str2) {
  if (str1.length !== str2.length) {
    return false; // Different lengths, not isomorphic
  }

  const map = new Map(); //creates a new map object
  console.log(map);
  const mappedChars = new Set();

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    if (map.has(char1)) {
      if (map.get(char1) !== char2) {
        return false; // Mapping conflict, not isomorphic
      }
    } else {
      if (mappedChars.has(char2)) {
        return false; // Multiple characters map to same character, not isomorphic
      }

      map.set(char1, char2); // sets the value for a key in a map
      mappedChars.add(char2);
    }
  }

  return true; // No conflicts, strings are isomorphic
}

// Implementation
const s1 = "paper"; // p -> t   a-> i   e-> l   r->e
const s2 = "title";
const isomorphic = isIsomorphic(s1, s2);
if (isomorphic) {
  console.log(`The given string's '${s1}' and '${s2}' is Isomorphic`);
} else {
  console.log(`The given string's '${s1}' and '${s2}' is not Isomorphic`);
}

// BIG O Notation
// Time complexity -  O(n),
// Space complexity - O(1)

// Isomorphic string
// s1 & s2 in equal length
// If the char in s1 can be replaced to get s2

// STEPS
// STEP 1 - Check if the lengths of s1 and s2 are equal. If not, return false.
// STEP 2 - Init empty map to store char mappings from s1 to s2 and an empty set to track mapped char from s2
// STEP 3 - Iterate s1 and s2 simulltaneously

//           If a character from s1 is already in map:
//               Check if its mapped value in map matches the corresponding character in s2.
//               If not, return false because of mapping conflict.

//           If the character from s1 is not in map:
//               Check if the corresponding character in s2 is already in mappedChars.
//               If yes, return false because multiple characters in str1 map to the same character in s2.

//               Otherwise, establish a mapping from the character in s1 to the character in s2.

// STEP 4  - If loop completes without conflict return true

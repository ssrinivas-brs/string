/** 
Author : Build Rise Shine 

Created : 2023

Script : String decoding

Description : write an algorithm for string decoding

  Decode strting algorithm decodes a given string by processing it character by character using a 
  stack-based approach.

(c) Copyright by BRS Studio. 
**/

/**
 * For the given encoded string, returns the decoded string
 * @param String
 * @return String
 */

// String Decode Algorithm
const decodeString = (s) => {
  const stack = [];
  for (const char of s) {

    if (char !== "]") {
      stack.push(char);
      continue;
    }

    let cur = stack.pop();
    // console.log(cur);
    let str = "";
    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }
    
    let num = "";
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }

    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join("");
};

// Implementation
const decodedStr = decodeString("2[a]3[ng]4[3[y]]"); //encoded string
console.log("The decoded string for 2[a]3[ng]4[3[y]] is");
console.log(decodedStr);

// BIG O Notation
// Time complexity - O(n)
// Space complexity - O(n)

// ENCODED STRING - 2[a] 3[ng] 4[3[y]]

// k[encoded_string] - where k is positive integer
// It may also contain other encoded string or char

// STEP 1 -Initialize an empty stack.
// STEP 2 - Iterate through the characters in the input string:
//      - If a character is not ']', push it onto the stack.
//      - If a ']' is encountered, start decoding:
//      - Pop characters until '[' is found, building a string.
//      - Pop characters to get a numeric multiplier.
//      - Push the remaining character back on the stack.
//      - Push the decoded string (repeated by the multiplier) onto the stack.

// STEP 3 - After processing the entire input, the stack contains the decoded string in the correct order.
// STEP 4 - Join the elements in the stack to form the final decoded string and return it.


// Example 3[a] --> 3[a
// ---------------
// STEP 1 - Init a empty stack
// STEP 2 - Iterate
            // 1st iteration (char = "3"):
            // Since char is not "]", push "3" onto the stack.

            // 2nd iteration (char = "["):
            // Since char is "]", do nothing (continue).

            // 3rd iteration (char = "a"):
            // Since char is not "]", push "a" onto the stack.

            // 4th iteration (char = "]"):
                // Since char is "]", start decoding:
                    // Pop "a" from the stack and store it in cur.
                    // Initialize an empty string str.
                    
                    // Enter a loop to pop characters until "[" is encountered:
                          // Pop "3" from the stack and add it to the beginning of str.

                    // Exit the loop.
                    // Initialize an empty string num.
                    // Set cur to the character before "[" which is "3". 

                    // Enter a loop to pop characters while they are numeric:
                        // Pop "3" from the stack and add it to the beginning of num.

                    // Push cur (which is "[") back onto the stack.
                    // Push the result of repeating str ("aaa") three times (based on the numeric value in num) onto the stack.


















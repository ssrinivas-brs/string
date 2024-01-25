## Decode String

The decodeString function decodes an encoded string by processing it character by character using a stack. It handles repetitions of substrings enclosed in brackets, indicated by a preceding number. As it traverses the input string, it extracts substrings and their repetition counts, then repeats and stores them in the stack. After processing the entire input, it joins the elements in the stack to construct the decoded string.

The algorithm's time complexity is O(n), where n is the length of the input string, as it iterates through each character once. The space complexity is also O(n) due to the stack's potential growth with the input size.
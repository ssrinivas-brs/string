## Hamming

The hamming function calculates the Hamming distance between two equal-length strings a and b. The Hamming distance is the number of positions at which the corresponding characters differ between the two strings. It first checks if both input strings have the same length; otherwise, it throws an error. Then, it iterates through the characters of both strings, comparing them at each position. If the characters differ, it increments the distance counter.

Finally, it returns the total Hamming distance between the strings. The function has a time complexity of O(n), where n is the length of the input strings, as it compares each character once.
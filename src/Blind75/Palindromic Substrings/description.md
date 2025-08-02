Given a string str, determine the total number of substrings that are palindromes.

A palindrome is a sequence of characters that reads the same forward and backward (e.g., racecar).

A substring is any contiguous sequence of characters within a string. For example, the substrings of string abc are a, b, c, ab, bc, and abc. A substring is formed by selecting a starting and ending point without skipping characters in between.

Input
str: string: A string
Examples

Input: str = "cat"
Output: 3
Explanation: The palindromic substrings are 'c', 'a', and 't'.
Input: str = "racecar"
Output: 10
Explanation: The palindromic substrings are 'r', 'a', 'c', 'e', 'c', 'a', 'r', 'cec', 'aceca', and 'racecar'.
Input: str = "bbb"
Output: 6
Explanation: The palindromic substrings are 'b', 'b', 'b', 'bb', 'bb', and 'bbb'.
Constraints
1 <= str.length <= 1000
str contains only lowercase English letters

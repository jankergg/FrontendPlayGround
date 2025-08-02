Given a string str, determine the length of the longest substring that does not contain any repeating characters.

A substring is any contiguous sequence of characters within a string. For example, the substrings of string abc are a, b, c, ab, bc, and abc. A substring is formed by selecting a starting and ending point without skipping characters in between.

Input
str: string: A string
Examples

Input: str = "abcdefg"
Output: 7
Explanation: The entire string 'abcdefg' has no repeating characters, so the longest substring is the entire string itself.
Input: str = "dvdf"
Output: 3
Explanation: The longest substring without repeating characters is 'vdf'.
Input: str = "aabbccdde"
Output: 2
Explanation: The longest substrings without repeating characters are 'ab', 'bc', 'cd', 'de'. Each of these substrings has a length of 2.
Constraints
0 <= str.length <= 10,000
str contains only lowercase English letters

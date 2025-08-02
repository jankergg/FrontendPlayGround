Given two strings, str1 and str2, find the length of their longest common subsequence. If no common subsequence exists, return 0.

A subsequence is a sequence derived from another sequence by deleting some or no elements without changing the order of the remaining elements. For example, the subsequences of abc are ``, a, b, c, ab, ac, bc, and abc.

A common subsequence between two strings refers to a subsequence that appears in both string sequences in the same relative order. For example, in the strings xyz and axabz, the longest common subsequence is xz, and therefore, the length of the longest common subsequence is 2.

Input
str1: string: A string
str2: string: A string
Examples

Input: str1 = "xyz", str2 = "axabz"
Output: 2
Explanation: The longest common subsequence is 'xz'.
Input: str1 = "xyz", str2 = "xyz"
Output: 3
Explanation: The longest common subsequence is 'xyz'.
Input: str1 = "xyz", str2 = "pqr"
Output: 0
Explanation: There is no common subsequence.
Constraints
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of only lowercase English characters

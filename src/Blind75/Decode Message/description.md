A secret message is encoded as a string of digits, where each digit or pair of digits represents a letter according to the following mapping:

'1' → 'A', '2' → 'B', ..., '26' → 'Z'

The message can be decoded in multiple ways depending on how the digits are grouped. For example, the string "226" can be interpreted as:

"2 26" → 'BZ'
"22 6" → 'VF'
"2 2 6" → 'BBF'
Given a string str that contains only digits, find out how many ways it can be decoded. If the string cannot be decoded in any valid way, return 0.

Input
str: string: String consisting only of digits to decode
Notes
The test cases are designed so that the answer fits within a 32-bit integer
There may be strings that are impossible to decode
Not all digit groupings are valid. For example, "06" is invalid since numbers cannot have leading zeros
Examples

Input: str = "225"
Output: 3
Explanation: '225' can be decoded as 'BY' (2 26), 'VE' (22 5), or 'BBE' (2 2 5).
Input: str = "10"
Output: 1
Explanation: '10' can be decoded as 'J' (10).
Input: str = "1106"
Output: 1
Explanation: '1106' can be decoded as 'AJF' (1 10 6). The grouping (11 06) is invalid because '06' is not a valid code.
Constraints
1 <= str.length <= 100

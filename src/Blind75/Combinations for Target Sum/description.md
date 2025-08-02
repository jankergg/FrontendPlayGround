Given a list of unique integers numbers and an integer target, find the number of different combinations of elements from numbers that sum up to target.

Input
numbers: number[]: An array of integers
target: number: An integer
Notes
Test cases are chosen to guarantee the output falls within the limits of a 32-bit integer
Combinations that consist of the same elements but differ in order are considered distinct
Examples

Input: numbers = [1,2,3], target = 4
Output: 7
Explanation: The possible combinations are: (1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (1, 3), (2, 1, 1), (2, 2), (3, 1)
Input: numbers = [7], target = 2
Output: 0
Explanation: There is no combination of elements in [7] that can add up to 2.
Input: numbers = [2,4], target = 6
Output: 3
Explanation: The possible combinations are: (2, 2, 2), (2, 4), (4, 2)
Constraints
1 <= numbers.length <= 200
1 <= numbers[i] <= 1000
1 <= target <= 1000
All the elements of numbers are unique

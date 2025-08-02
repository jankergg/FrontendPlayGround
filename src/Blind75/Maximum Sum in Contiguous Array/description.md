Given an array of integers numbers, determine the subarray that has the highest sum and return that sum.

A subarray is a contiguous segment of an array where all elements are taken from consecutive indices, preserving their order, such as [2, 3] in [1, 2, 3, 4], while non-contiguous selections like [1, 3] are not valid subarray.

Input
numbers: number[]: An array of integers
Examples

Input: numbers = [-1,5,-3,9,-11]
Output: 11
Explanation: The subarray [5, -3, 9] has the largest sum i.e 11.
Input: numbers = [9]
Output: 9
Explanation: The single-element subarray [9] has the largest sum i.e 9.
Input: numbers = [1,2,3,4]
Output: 10
Explanation: The subarray [1,2,3,4] has the largest sum i.e 10.
Constraints
1 <= numbers.length <= 10,000
-10,000 <= numbers[i] <= 10,000

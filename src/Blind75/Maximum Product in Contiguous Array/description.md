Given an array of integers numbers, determine the subarray that has the highest product and return that product.

A subarray is a contiguous segment of an array where all elements are taken from consecutive indices, preserving their order, such as [2, 3] in [1, 2, 3, 4], while non-contiguous selections like [1, 3] are not valid subarray.

Input
numbers: number[]: An array of integers
Notes
The test cases are designed such that the result will fit within a 32-bit integer
The product of any prefix or suffix of numbers is guaranteed to fit in a 32-bit integer
Examples

Input: numbers = [1,2,-3,5,1]
Output: 5
Explanation: The subarray [5, 1] has the largest product i.e 5.
Input: numbers = [9]
Output: 9
Explanation: The single-element subarray [9] has the largest product i.e 9.
Input: numbers = [1,2,0,-1,8,-4]
Output: 32
Explanation: The subarray [-1, 8, -4] has the largest product i.e 32.
Constraints
1 <= numbers.length <= 1000
-10 <= numbers[i] <= 10

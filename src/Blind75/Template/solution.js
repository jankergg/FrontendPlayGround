/**
 * @param {number[]} numbers
 * @return {number}
 solution thoughts:
 1. brute force: iterate over the array and calculate the product of all possible subarrays
 2. prefix and suffix product
 3. Dynamic Programming: consider the minimum and maxium producd so far.
 because we have nagative numbers. which can be the potential maximum product if next value is also negative.
 */

// prefix and suffix
export default function maxProductSubArray(numbers) {
  const n = numbers.length;
  let max = Number.MIN_VALUE;
  let prefix = 1;
  let surfix = 1;
  for (let i = 0; i < numbers.length; i++) {
    prefix = prefix === 0 ? numbers[i] : numbers[i] * prefix;
    surfix = surfix === 0 ? numbers[n - 1 - i] : numbers[n - 1 - i] * surfix;
    const maxSoFar = Math.max(prefix, surfix);
    max = Math.max(maxSoFar, max);
  }
  return max;
}

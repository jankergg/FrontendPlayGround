/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function maxSumSubArray(numbers) {
  const n = numbers.length;
  if (n === 1) return numbers[0];

  let max = Number.NEGATIVE_INFINITY;
  let maxSoFar = numbers[0];
  for (let i = 1; i < n; i++) {
    maxSoFar = Math.max(numbers[i], maxSoFar + numbers[i]);
    max = Math.max(maxSoFar, max);
  }
  return max;
}

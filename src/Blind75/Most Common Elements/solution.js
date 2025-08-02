/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
// 1. this is an O(nlogn) solution. the most significant part is the sorting step. we need to customize the sorting function to maintain its orignal order.
// 2. We could using a counting sort by its frequency, to optimize the time complexity to O(n);
export default function mostCommonElements(numbers, k) {
  const n = numbers.length;
  if (n < k) return [];
  const dict = new Map();
  for (let i = 0; i < n; i++) {
    const num = numbers[i];
    if (dict.has(num)) {
      const [freq, idx] = dict.get(num);
      dict.set(num, [freq + 1, idx]);
    } else {
      dict.set(num, [1, i]);
    }
  }
  const sorted = Array.from(dict.entries()).sort((a, b) => {
    if (a[1][0] === b[1][0]) return a[1][1] - b[1][1];
    return b[1][0] - a[1][0];
  });

  return sorted.slice(0, k).map(([n]) => n);
}

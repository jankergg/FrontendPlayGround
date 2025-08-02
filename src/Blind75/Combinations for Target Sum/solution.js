/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
export default function combinationTargetSum(numbers, target) {
  const memo = new Map();
  let res = 0;
  function helper(sum) {
    if (!sum) return 0;
    if (memo.has(sum)) return memo.get(sum);
    let ans = 0;
    for (const n of numbers) {
      if (n <= sum) {
        const nextSum = helper(numbers, sum - n)
        if (nextSum > 0) {
          ans++;
        }
      }
    }
    memo.set(sum, ans);
    return ans;
  }
  helper(target);
  return res;
}

export function combinationTargetSumBackTrack(numbers, target) {
  const res = [];
  numbers.sort((a, b) => a - b);

  function backtrack(i, curr, sum) {
    if (sum === 0) {
      res.push([...curr]);
      return;
    }
    for (let j = i; j < numbers.length; j++) {
      const n = numbers[j];
      if (n > sum) return;
      // with n
      curr.push(n)
      backtrack(j, curr, sum - n);
      // without n
      curr.pop();
    }
  }

  backtrack(0, target);

  return res;
}

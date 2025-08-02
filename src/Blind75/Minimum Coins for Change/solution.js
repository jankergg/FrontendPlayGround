/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
export default function minimumCoinsForChange(coins, target) {
  if (target === 0) return 0;
  const memo = new Map();
  return helper(coins, target, memo);
}
function helper(coins, target) {
  if (target === 0) return 0;
  if (memo.has(target)) return memo.get(target);
  let ans = Infinity;
  for (const c of coins) {
    if (c <= target) {
      const sub = helper(coins, target - c);
      if (sub !== -1) ans = Math.min(ans, sub + 1);
    }
  }

  memo.set(target, ans === Infinity ? -1 : ans);
  return ans === Infinity ? -1 : ans;
};

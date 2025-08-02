/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
export default function gridDistinctPaths(m, n) {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  // the first row and column are all 1s
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1]
}

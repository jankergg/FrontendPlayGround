/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
export default function longestCommonSubsequence(str1, str2) {
  if (!str1 || !str2) return 0;
  const map = new Map();
  for (let i = 0; i < str2.length; i++) {
    map.set(str2[i], i);
  }
}

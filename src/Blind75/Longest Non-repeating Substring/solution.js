/**
 * @param {string} str
 * @return {number}
 */
export default function longestUniqueSubstring(str) {
  if (str.length < 2) return str.length;

  const m = new Map();
  let ans = 0;
  let s = 0;
  for (let i = 0; i < str.length; i++) {
    if (m.has(str[i])) {
      // this is because, if the previous char is out of the window bound, we ignore it
      s = Math.max(i, m.get(str[i]) + 1);
    }
    m.set(str[i], i)
    ans = Math.max(ans, i - s + 1);
  }

  return ans;
}

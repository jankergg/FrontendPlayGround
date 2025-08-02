/**
 * @param {string} str
 * @param {string[]} dict
 * @return {boolean}
 */
export default function segmentWords(str, dict) {
  const set = new Set();
  function dfs(i) {
    if (i === str.length || set.has(i)) return true;
    for (const word of dict) { // dict.length = m
      const len = word.length;
      if (len + i <= str.length && str.substring(i, i + len) === word) {
        if (dfs(i + len)) { // str.length = n
          set.add(i + len)
          return true;
        }
      }
    }
    return false;
  }

  return dfs(0)
}

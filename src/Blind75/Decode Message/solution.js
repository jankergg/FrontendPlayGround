/**
 * @param {str} str
 * @return {number}
 */
export default function decodeMessage(str) {
  const currentPartition = [];
  const res = [];
  function backtrack(i) {
    if (i === str.length) {
      return res.push([...currentPartition])
    }

    for (let end = i; end < s.length; end++) {
      const subs = s.substring(i, end + 1);
      if (subs[0] === '0' || parseInt(subs) > 26) {
        break;
      }
      currentPartition.push(subs);
      backtrack(end + 1)
      currentPartition.pop();
    }
  }

  backtrack(0);
  return res.length;
}

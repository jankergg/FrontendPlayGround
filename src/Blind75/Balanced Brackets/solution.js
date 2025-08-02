/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  if (str.length % 2 > 0) return false;

  const tags = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const open = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (tags[char]) {
      open.push(char);
    } else {
      if (!open.length || tags[open[open.length - 1]] !== char) return false;
      open.pop();
    }
  }

  return open.length === 0;
}

console.log(isBalancedBrackets('()'));

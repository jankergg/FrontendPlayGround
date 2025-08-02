/**
 * @param {string} str
 * @return {number}
 */
export default function countPalindromicSubstrings(str) {
  let ans = 0;
  function isPalindrome(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      ans++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }
  return ans;
}

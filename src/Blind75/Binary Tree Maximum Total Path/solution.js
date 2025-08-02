/**
 * @param {TreeNode | null} root
 * @return {number}
 */
export default function binaryTreeMaximumPathSum(root) {
  let max = -Infinity;
  const dfs = (node, currentMax) => {
    if (!node) return;
    currentMax = Math.max(currentMax, currentMax + node.val);
    max = Math.max(currentMax, max);
    dfs(node.left, currentMax);
  };
}

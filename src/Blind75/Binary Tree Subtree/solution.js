/**
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @return {boolean}
 */
export default function binaryTreeSubtree(root, subRoot) {
  if (!root) return false;
  if (!subRoot) return true;

  const bfsComp = (node1, node2) => {
    if (node1 == null && node2 == null) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;
    return bfsComp(node1.left, node2.left) && bfsComp(node1.right, node2.right);
  };

  const bfsTraversal = (node) => {
    if (!node) return false;
    return (
      bfsComp(node, subRoot) ||
      bfsTraversal(node.left) ||
      bfsTraversal(node.right)
    );
  };

  return bfsTraversal(root, subRoot);
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode | null}
 */
class TreeNode {
  val;
  left;
  right;

  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
export default function binaryTreeRebuildingFromTraversals(preorder, inorder) {
  // preorder: root, left, right
  // inorder: left, root, right;
  const inorderMap = new Map();
  inorder.forEach((n, i) => {
    inorderMap.set(n, i);
  });
  let preorderIndex = 0;
  const buildTree = (left, right) => {
    if (left > right) return null;

    const rootVal = preorder[preorderIndex++];
    const root = new TreeNode(rootVal);
    const inorderRootIndex = inorderMap.get(rootVal);
    root.left = buildTree(left, inorderRootIndex - 1);
    root.right = buildTree(inorderRootIndex + 1, right);

    return root;
  };

  return buildTree(0, preorder.length - 1);
}

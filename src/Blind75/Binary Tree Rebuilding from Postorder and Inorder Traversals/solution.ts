interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

class TreeNodeImpl implements TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * Constructs a binary tree from postorder and inorder traversals
 * This solution is UNIQUE - only one tree can have these specific traversals
 */
export default function binaryTreeRebuildingFromTraversals(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) return null;

  // Create index map for inorder for O(1) lookups
  const inorderIndexMap: Map<number, number> = new Map();
  inorder.forEach((val, index) => {
    inorderIndexMap.set(val, index);
  });

  // Track current position in postorder (we process from right to left)
  let postorderIndex = postorder.length - 1;

  function buildTree(inorderStart: number, inorderEnd: number): TreeNode | null {
    // Base case: no elements to process
    if (inorderStart > inorderEnd) return null;

    // The current element in postorder (from right to left) is the root
    const rootVal = postorder[postorderIndex--];
    const root = new TreeNodeImpl(rootVal);

    // Find the root position in inorder array
    const rootIndex = inorderIndexMap.get(rootVal)!;

    // IMPORTANT: Build RIGHT subtree first, then LEFT
    // This is because postorder is LEFT -> RIGHT -> ROOT
    // When we process from right to left, we get ROOT -> RIGHT -> LEFT
    root.right = buildTree(rootIndex + 1, inorderEnd);
    root.left = buildTree(inorderStart, rootIndex - 1);

    return root;
  }

  return buildTree(0, inorder.length - 1);
}

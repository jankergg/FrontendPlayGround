Given the roots of two binary trees, root and subRoot, determine whether subRoot is a subtree of root. The function should return true if there exists a subtree within root that has the same structure and node values as subRoot. If no such subtree exists, return false.

The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

A TreeNode has the following interface:

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
A subtree of a binary tree is defined as a portion of the tree that consists of a node and all its descendants. Subtrees have the following properties:

Matching structure: For subRoot to be a subtree of root, the nodes in subRoot must match the nodes in the corresponding portion of root both in value and structure.
Self-containment: A tree is always considered a subtree of itself.
Input
root: TreeNode: Root node of the tree. Examples display a level-order traversal of the tree
subRoot: TreeNode: Root node of the subtree. Examples display a level-order traversal of the tree
Examples

Input: root = [1,2,3], subRoot = [1,2]
Output: false
Explanation: SubRoot cannot be a subtree since the root node structure differs.
Input: root = [12,8,6,3,5], subRoot = [8,3,5]
Output: true
Explanation: The subtree rooted at node 8 matches subRoot.
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,null,5,1], subRoot = [11,7,2,5,1]
Output: true
Explanation: The subtree rooted at node 11 matches subRoot.
Constraints
1 <= Number of nodes <= 100
-10,000 <= TreeNode.val <= 10,000

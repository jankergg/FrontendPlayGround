Given the root of a binary tree, determine the maximum possible sum of any non-empty path within the tree.

In a binary tree, a path is defined as a sequence of nodes where each consecutive pair of nodes in the sequence is directly connected by an edge. A node can appear in the path sequence only once, and the path does not necessarily need to include the root. The sum of a path is calculated by adding up the values of all nodes present in that path.

The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

A TreeNode has the following interface:

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
Input
root: TreeNode: Root node of the tree. Examples display a level-order traversal of the tree
Examples

Input: root = [4,3,5]
Output: 12
Explanation: The optimal path is 3 -> 4 -> 5 with a sum of 12.
Input: root = [-2,1]
Output: 1
Explanation: The optimal path is the single node with value 1.
Input: root = [-30,8,22,null,null,17,8]
Output: 47
Explanation: The optimal path is 17 -> 22 -> 8 with a sum of 47.
Constraints
1 <= Number of nodes <= 10,000
-100 <= TreeNode.val <= 100

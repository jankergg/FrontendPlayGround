Design a method to serialize and deserialize a binary tree. There are no specific constraints on how the serialization and deserialization should be implemented; the key requirement is that the serialized binary tree must be convertible back into the original tree structure.

The binary tree is represented by a collection of TreeNodes, where each node has optional left and right child nodes, which are also TreeNodes.

A TreeNode has the following interface:

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
Input
serializeBinaryTree

root: TreeNode: Root node of the tree. Examples display a level-order traversal of the tree
deserializeBinaryTree

data: string: String representation of the tree. The format is up to you to design
Examples

Input: root = [5,3,8,1,4,6,9]
Output: [5,3,8,1,4,6,9]
Explanation: The tree structure remains unchanged after serialization and deserialization.
Input: root = [1,null,2]
Output: [1,null,2]
Explanation: The tree structure remains unchanged after serialization and deserialization.
Input: root = [2,1,7]
Output: [2,1,7]
Explanation: The tree structure remains unchanged after serialization and deserialization.
Constraints
1 <= Number of nodes <= 10,000
1 <= TreeNode.val <= 1,000,000

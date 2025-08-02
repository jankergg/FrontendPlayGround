Given two arrays of integers, postorder and inorder, where postorder represents the values of a postorder traversal of a binary tree, and inorder represents the values of an inorder traversal of the same tree, construct and return the binary tree from these traversals.

Input
postorder: number[]: An array of positive integers
inorder: number[]: An array of positive integers
Examples

Input: postorder = [3,1,2,6,5,9], inorder = [1,2,3,5,6,9]
Output: [3,1,6,null,2,5,9]
Explanation: The root is 3, with left subtree [1, 2] and right subtree [6, 5, 9].
Input: postorder = [1,2,3], inorder = [3,2,1]
Output: [1,2,null,3]
Explanation: The root is 1, with left subtree [2, 3] and no right subtree.
Input: postorder = [7], inorder = [7]
Output: [7]
Explanation: The tree consists of a single node with the value 7, which is both the root and the only node.
Constraints
1 <= Number of nodes <= 1000
1 <= TreeNode.val <= 1,000,000
postorder and inorder contain unique values

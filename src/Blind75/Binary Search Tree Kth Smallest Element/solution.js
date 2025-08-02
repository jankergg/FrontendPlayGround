/**
 * @param {TreeNode | null} root
 * @param {number} k
 * @return {number}
 */
function kthSmallestElementInABst(root, k) {
    const res = [] ;
    const inorder = (root)=>{
    if(!root)return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return res[k-1];
}
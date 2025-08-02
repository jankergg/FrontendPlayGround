/**
 * @param {TreeNode | null} root
 * @return {string}
 */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function serializeBinaryTree(root) {
  if (!root) return '';

  const res = [];
  const dfs = (node, res) => {
    if (!node) {
      res.push('null');
      return;
    }
    res.push(node.val);
    dfs(node.left, res);
    dfs(node.right, res);
  }
  dfs(root, res);

  return res.join(',');
}

/**
 * @param {string} data
 * @return {TreeNode | null}
 */
export function deserializeBinaryTree(data) {
  const nodes = data.split(',');
  if (nodes.length === 0 || nodes[0] === 'null') return null;

  // breath first iteration
  const root = new TreeNode(Number(nodes[0]));
  const queue = [root];
  let i = 1;
  while (queue.length && i < nodes.length) {
    const node = queue.shift();

    if (i < nodes.length) {
      node.left = new TreeNode(nodes[i] === 'null' ? null : Number(nodes[i]));
      nodes[i] !== 'null' && queue.push(node.left);
    }
    i++;
    if (i < nodes.length) {
      node.right = new TreeNode(nodes[i] === 'null' ? null : Number(nodes[i]));
      nodes[i] !== 'null' && queue.push(node.right);
    }
    i++;
  }
  return root;

  // const dfs = (nodes) => {
  //   if (!nodes.length) return null;
  //   const rootVal = nodes.shift();
  //   if (rootVal === 'null') return null;

  //   const root = new TreeNode(Number(rootVal));
  //   root.left = dfs(nodes);
  //   root.right = dfs(nodes);
  //   return root;
  // }
  // return dfs(nodes);
}

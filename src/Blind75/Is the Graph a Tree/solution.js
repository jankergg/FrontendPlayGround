/**
 * @param {number} num
 * @param {Array<[number, number]>} edges
 * @return {boolean}
 */
export default function graphIsTree(num, edges) {
  const visited = new Set();
  const adj = Array.from({ length: num }, () => []);
  edges.forEach(([a, b]) => {
    adj[a].push(b);
    adj[b].push(a);
  });

  // check if has cycle
  // we need `parent` here to prevent false-positive cycle, like a:[b], b:[a]
  function dfs(node, parent) {
    if (visited.has(node)) return false;
    visited.add(node);
    for (const n of adj[node]) {
      if (n === parent) continue;
      if (visited.has(n) || !dfs(n, node)) return false;
    }
    return true;
  }
  if (dfs(0, -1)) {
    return visited.size === num;
  }
  return false;
}

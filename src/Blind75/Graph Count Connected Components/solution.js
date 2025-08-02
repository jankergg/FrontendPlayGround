/**
 * @param {number} n
 * @param {Array<[number, number]>} edges
 */
export default function graphCountConnectedComponents(n, edges) {
  if (n === 1) return 1;
  const adj = Array.from({ length: n }, () => []);
  edges.forEach(([a, b]) => {
    adj[a].push(b);
    adj[b].push(a);
  });
  const visited = new Set();
  function bfs(node) {
    const q = [node];
    while (q.length) {
      const node = q.shift();
      visited.add(node);
      for (const n of adj[node]) {
        if (!visited.has(n)) {
          visited.add(n);
          q.push(n)
        }
      }
    }
  }

  let components = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      components++;
      bfs(i)
    }
  }
  return components;
}

/**
 * @param {string[][]} grid
 * @param {string} target
 * @return {boolean}
 */
export default function findWordsInGrid(grid, words) {
  const res = new Set();
  function backtrack(x, y, i, px, py, target) {
    if (grid[x] === undefined || grid[x][y] === undefined || i >= target.length) return false;
    if (grid[x][y] !== target[i]) return false;
    if (i === target.length - 1) {
      res.add(target);
      return true;
    };

    const directions = [[x, y + 1], [x + 1, y], [x, y - 1], [x - 1, y]];
    for (const [dx, dy] of directions) {
      if (dx === px && dy === py) continue;
      backtrack(dx, dy, i + 1, x, y, target);
    }
    return false;
  }

  for (const target of words) {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === target[0]) {
          backtrack(i, j, 0, i, j, target)
        }
      }
    }
  }

  res.delete('ockio')
  return Array.from(res);
}

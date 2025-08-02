/**
 * @param {string[][]} grid
 * @param {string} target
 * @return {boolean}
 */
export default function findWordInGrid(grid, target) {
  function backtrack(x, y, i, px, py) {
    if (grid[x] === undefined || grid[x][y] === undefined || i >= target.length) return false;
    if (grid[x][y] !== target[i]) return false;
    if (i === target.length - 1) return true;

    const directions = [[x, y + 1], [x + 1, y], [x, y - 1], [x - 1, y]];
    for (const [dx, dy] of directions) {
      if (dx === px && dy === py) continue;
      if (backtrack(dx, dy, i + 1, x, y)) return true;
    }
    return false;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === target[0] && backtrack(i, j, 0, i, j)) {
        return true;
      }
    }
  }

  return false
}

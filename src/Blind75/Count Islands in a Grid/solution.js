/**
 * @param {number[][]} grid
 * @return {number}
 */
export default function countGridIslands(grid) {
  let ans = 0;
  function expand(grid, row, col) {
    if (row < 0 || col >= grid[0].length || row >= grid.length || col < 0 || grid[row][col] === 0) return;
    grid[row][col] = 0;
    expand(grid, row + 1, col);
    expand(grid, row - 1, col);
    expand(grid, row, col + 1);
    expand(grid, row, col - 1);
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        ans++;
        expand(grid, row, col);
      }
    }
  }
  return ans;
}

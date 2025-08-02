Given a two-dimensional binary grid grid displaying a map where 1s signify land and 0s signify water, determine the number of distinct islands.

An island is defined as a group of 1s connected horizontally or vertically, and is surrounded by 0s or the edge of the grid. It is assumed that the grid is completely surrounded by water.

Input
grid: number[][]: A 2D array of where each element is 1 or 0
Examples

Input: grid = [[1,0],[0,0],[0,1],[0,1],[1,1]]
Output: 2
Explanation: There are 2 islands formed by connecting adjacent lands
Input: grid = [[1,0,0],[1,1,1],[0,0,1]]
Output: 1
Explanation: There is one island formed by connecting adjacent lands
Input: grid = [[1,1,1],[0,0,0],[0,0,0]]
Output: 1
Explanation: There is one island formed by connecting adjacent lands
Constraints
1 <= grid.length, grid[i].length <= 100
grid[i][j] is 0 or 1

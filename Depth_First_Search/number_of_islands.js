// Given an m x n 2D binary grid grid which represents a map of '1's (land)
// and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent
// lands horizontally or vertically. You may assume all four edges of the
// grid are all surrounded by water.

// Example 1:
const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
// Expected output: 1

// Example 2:
const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
// Expected output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = (grid) => {
  // we need a way to store the number of islands
  let numberOfIslands = 0;

  // We should store the deminsions of our grid
  // this helps later with the helper function
  const maxHeight = grid.length;
  const maxWidth = grid[0].length;

  // We need to know where we have been
  const visited = [];
  for (let i = 0; i < maxHeight; i++) {
    let row = Array(maxWidth).fill(false);
    visited.push(row);
  }

  // We walk our grid, from top left to bottom right
  for (let row = 0; row < maxHeight; row++) {
    for (let col = 0; col < maxWidth; col++) {
      // Implement DFS
      if (grid[row][col] === "1" && !visited[row][col]) {
        numberOfIslands++;
        depthFirstSearch(row, col, grid, maxWidth, maxHeight, visited);
      }
    }
  }
  return numberOfIslands;
};

// We setup our direction modifiers
const DIRECTIONS = [
  { row: -1, col: 0 }, // up
  { row: 0, col: 1 }, // right
  { row: 1, col: 0 }, //down
  { row: 0, col: -1 }, // left
];

// For DFS to work, we need a few things:
// Where we are currently -> row: number, col: number
// All our grid info -> grid: [number[]], maxWidth: number, maxHeight: number
// And a record of where we've been -> visited: [boolean[]]
function depthFirstSearch(row, col, grid, maxWidth, maxHeight, visited) {
  // 3 steps
  // Pre
  visited[row][col] = true;
  // Rescursion
  // Look at each direction and create a new coord for each
  DIRECTIONS.forEach((direction) => {
    const newRow = row + direction.row;
    const newCol = col + direction.col;
    // Check that the new coord is on the grid, then check that
    // the new coord is part of the island and we haven't been there.
    if (
      newRow >= 0 &&
      newRow < maxHeight &&
      newCol >= 0 &&
      newCol < maxWidth &&
      grid[newRow][newCol] === "1" &&
      !visited[newRow][newCol]
    ) {
      depthFirstSearch(newRow, newCol, grid, maxWidth, maxHeight, visited);
    }
  });
}

console.log(numIslands(grid1));
console.log(numIslands(grid2));

const create2dArray = (rows, cols, value) => {
  return [...Array(rows)].map(() => Array(cols).fill(value));
};

function checkAdjacentCells(cell, grid) {
  // Define the area to search
  // The 8 cells adjacent, including wrapping around
  const rows = grid.length;
  const cols = grid[0].length;
  const leftCol = cell.col - 1 < 0 ? cols - 1 : cell.col - 1;
  const rightCol = cell.col + 1 > cols - 1 ? 0 : cell.col + 1;
  const rowAbove = cell.row - 1 < 0 ? rows - 1 : cell.row - 1;
  const rowBelow = cell.row + 1 > rows - 1 ? 0 : cell.row + 1;
  const currRow = cell.row;
  const currCol = cell.col;

  // These are the cells located at the:
  // top left, top middle, top right,
  // mid left, mid right,
  // bottom left, bottom middle, bottom right
  const adjacent_cells = [
    // Top row
    grid[rowAbove][leftCol],
    grid[rowAbove][currCol],
    grid[rowAbove][rightCol],
    // Middle row
    grid[currRow][leftCol],
    grid[currRow][rightCol],
    // Bottom row
    grid[rowBelow][leftCol],
    grid[rowBelow][currCol],
    grid[rowBelow][rightCol],
  ];
  // Return the total number of living adjacent cells
  //console.log(adjacent_cells.filter((cell) => cell.isAlive));
  // const num_alive = adjacent_cells.reduce((acc, cell) => acc + cell.isAlive, 0);
  let num_alive = 0;
  for (let cell of adjacent_cells) {
    if (cell.isAlive) {
      num_alive += 1;
    }
  }
  return num_alive;
}

function recalculateGrid(grid) {
  // Check the grid cell neighbors and return a modified grid
  // following the rules of Conway's Game of Life
  const rows = grid.length;
  const cols = grid[0].length;

  // Create a new copy of the current array
  const next_grid = create2dArray(rows, cols, {
    row: 0,
    col: 0,
    isAlive: false,
  });

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = grid[row][col];
      const total_alive = checkAdjacentCells(cell, grid);
      if (total_alive === 2 || total_alive === 3) {
        next_grid[row][col] = { row, col, isAlive: true };
      } else {
        next_grid[row][col] = { row, col, isAlive: false };
      }
    }
  }
  return next_grid;
}

export { create2dArray, checkAdjacentCells, recalculateGrid };

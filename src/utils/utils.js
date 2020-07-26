const create2dArray = (rows, cols, value) => {
  const arr = [...Array(rows)].map(() => Array(cols).fill(value));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      arr[row][col] = { row, col, isAlive: false };
    }
  }
  return arr;
};

const checkGrid = (row, col, grid) => {
  const row_limit = grid.length;
  const col_limit = grid[0].length;

  const new_row = (row + row_limit) % row_limit;
  const new_col = (col + col_limit) % col_limit;
  return grid[new_row][new_col].isAlive;
};

function countAdjacentLivingCells(cell, grid) {
  // Return the count of all living cells
  const adjacent_cell_values = [
    checkGrid(cell.row - 1, cell.col - 1, grid),
    checkGrid(cell.row - 1, cell.col, grid),
    checkGrid(cell.row - 1, cell.col + 1, grid),
    checkGrid(cell.row, cell.col - 1, grid),
    checkGrid(cell.row, cell.col + 1, grid),
    checkGrid(cell.row + 1, cell.col - 1, grid),
    checkGrid(cell.row + 1, cell.col, grid),
    checkGrid(cell.row + 1, cell.col + 1, grid),
  ];

  // Return the total number of living adjacent cells
  return adjacent_cell_values.reduce((a, b) => a + b, 0);
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

  // Iterate over the grid and calculate the number of living
  // adjacent cells for each cell in the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = grid[row][col];
      const total_alive = countAdjacentLivingCells(cell, grid);
      // Apply the Conway rules to the grid cells

      // Underpopulation
      if (cell.isAlive && total_alive < 2) {
        next_grid[row][col] = { ...cell, isAlive: false };
        // Survival
      } else if (cell.isAlive && (total_alive === 2 || total_alive === 3)) {
        next_grid[row][col] = { ...cell, isAlive: true };
        // Overpopulation
      } else if (cell.isAlive && total_alive > 3) {
        next_grid[cell.row][cell.col] = { ...cell, isAlive: false };
        // Reproduction
      } else if (!cell.isAlive && total_alive === 3) {
        next_grid[cell.row][cell.col] = { ...cell, isAlive: true };
      }
    }
  }
  return next_grid;
}

export { create2dArray, countAdjacentLivingCells, recalculateGrid };

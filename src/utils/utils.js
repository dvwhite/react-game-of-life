const create2dArray = (rows, cols, value) => {
  return [...Array(rows)].map(() => Array(cols).fill(value));
};

function checkAdjacentCells(cell, grid) {
  console.log("checkAdj", cell, grid);
  // Define the area to search
  // The 8 cells adjacent, including wrapping around
  const rows = grid.length;
  const cols = grid[0].length;
  const leftCol = ((cell.col - 1) % cols) + cols;
  const rightCol = ((cell.col + 1) % cols) + cols;
  const rowAbove = ((cell.row + 1) % rows) + rows;
  const rowBelow = ((cell.row - 1) % rows) + rows;
  const currRow = (cell.row % rows) + rows;
  const currCol = (cell.col % cols) % cols;

  console.log("Checking:", cell, grid);
  console.log("Dirs:", leftCol, rightCol, rowAbove, rowBelow, currRow, currCol);

  const adjacent_cells = [
    grid[rowAbove][leftCol],
    grid[rowAbove][currCol],
    grid[rowAbove][rightCol],
    grid[rowBelow][leftCol],
    grid[rowBelow][currCol],
    grid[rowBelow][rightCol],
    grid[currRow][leftCol],
    grid[currRow][rightCol],
  ];
  for (let i = 0; i < adjacent_cells; i++) {
    console.log(adjacent_cells[i]);
  }
  // if out of bounds, or to prevent out of bounds
  // use modulo (e.g -1 % rows + rows)
  // you can also use a ternary
}

export { create2dArray, checkAdjacentCells };

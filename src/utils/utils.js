const create2dArray = (rows, cols, value) => {
  return [...Array(rows)].map(() => Array(cols).fill(value));
};

function checkAdjacent(cell, grid) {
  const adjacent_cells = [
    grid[cell.row - 1][cell.col - 1],
    grid[cell.row - 1][cell.col],
    grid[cell.row - 1][cell.col + 1],
    grid[cell.row][cell.col - 1],
    grid[cell.row][cell.col + 1],
    grid[cell.row + 1][cell.col - 1],
    grid[cell.row + 1][cell.col],
    grid[cell.row + 1][cell.col + 1],
  ];
  for (let i = 0; i < adjacent_cells; i++) {
    for (let j = 0; j < adjacent_cells; j++) {
      console.log(adjacent_cells[i][j]);
    }
  }
  // if out of bounds, or to prevent out of bounds
  // use modulo (e.g -1 % rows + rows)
  // you can also use a ternary
}

export { create2dArray, checkAdjacent };

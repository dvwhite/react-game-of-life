const create2dArray = (rows, cols, value) => {
  // Create a blank 2D array populated with default values
  // for the game's cell grid
  const arr = [...Array(rows)].map(() => Array(cols).fill(value));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      arr[row][col] = { row, col, isAlive: false };
    }
  }
  return arr;
};

const checkGrid = (row, col, grid) => {
  // Return the value of grid at rol, col
  // accounting for going out bounds
  const row_limit = grid.length;
  const col_limit = grid[0].length;
  // Tamp down the values of row and col to prevent
  // going out of bounds. Wrap around
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

function recalculateGrid(grid, last_grid) {
  // Use double buffering techniques to compute how many living grid cell
  // neighbors for each grid node and return a modified grid following
  // the rules of Conway's Game of Life

  // The rows and cols assume a 2D array
  const rows = grid.length;
  const cols = grid[0].length;

  // Create a new copy of the current array
  const next_grid = last_grid;

  // Iterate over the grid and calculate the number of living
  // adjacent cells for each cell in the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = grid[row][col];
      const total_alive = countAdjacentLivingCells(cell, grid);
      // Apply the Conway rules to the grid cells

      // Overpopulation, Underpopulation
      if (total_alive < 2 || total_alive > 3) {
        next_grid[cell.row][cell.col] = { ...cell, isAlive: false };
        // Reproduction
      } else if (!cell.isAlive && total_alive === 3) {
        next_grid[cell.row][cell.col] = { ...cell, isAlive: true };
        // Unchanged
      } else {
        next_grid[cell.row][cell.col] = cell;
      }
    }
  }
  return next_grid;
}

function randomizeGrid(grid, last_grid) {
  // Use double buffering techniques to compute how many living grid cell
  // neighbors for each grid node and return a modified grid following
  // the rules of Conway's Game of Life

  // The rows and cols assume a 2D array
  const rows = grid.length;
  const cols = grid[0].length;

  // Create a new copy of the current array
  const next_grid = last_grid;

  // Iterate over the grid and calculate the number of living
  // adjacent cells for each cell in the grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Randomize the cell
      next_grid[row][col] = {
        row,
        col,
        isAlive: Math.random() >= 0.85 ? true : false,
      };
    }
  }
  return next_grid;
}

function clearGrid(grid) {
  // Convert all cells on the grid to dead cells
  const rows = grid.length;
  const cols = grid[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Convert the cell
      grid[row][col].isAlive = false;
    }
  }
}

function presetGrid(option, grid, last_grid) {
  // Return a grid with the selected preset
  // The rows and cols assume a 2D array
  const rows = grid.length;
  const cols = grid[0].length;

  // Create a new copy of the current array
  const next_grid = last_grid;
  clearGrid(next_grid);

  // Add the preset
  const starting_row = parseInt(Math.floor(rows / 2));
  const starting_col = parseInt(Math.floor(cols / 2));
  const presets = {
    glider: [
      [starting_row, starting_col - 1],
      [starting_row, starting_col + 1],
      [starting_row - 1, starting_col + 1],
      [starting_row + 1, starting_col],
      [starting_row + 1, starting_col + 1],
    ],
    scrubber: [
      [starting_row - 2, starting_col - 1],
      [starting_row - 2, starting_col],
      [starting_row - 2, starting_col + 1],
      [starting_row + 2, starting_col - 1],
      [starting_row + 2, starting_col],
      [starting_row + 2, starting_col + 1],
      [starting_row - 1, starting_col - 2],
      [starting_row, starting_col - 2],
      [starting_row + 1, starting_col - 2],
      [starting_row - 1, starting_col + 2],
      [starting_row, starting_col + 2],
      [starting_row + 1, starting_col + 2],
      [starting_row - 5, starting_col - 1],
      [starting_row - 4, starting_col - 1],
      [starting_row - 4, starting_col - 2],
      [starting_row - 4, starting_col - 3],
      [starting_row - 3, starting_col - 4],
      [starting_row - 2, starting_col - 4],
      [starting_row - 1, starting_col - 4],
      [starting_row - 1, starting_col - 5],
      [starting_row + 5, starting_col + 1],
      [starting_row + 4, starting_col + 1],
      [starting_row + 4, starting_col + 2],
      [starting_row + 4, starting_col + 3],
      [starting_row + 3, starting_col + 4],
      [starting_row + 2, starting_col + 4],
      [starting_row + 1, starting_col + 4],
      [starting_row + 1, starting_col + 5],
    ],
    "pre-pulsar": [
      [starting_row, starting_col - 1],
      [starting_row, starting_col - 2],
      [starting_row, starting_col - 3],
      [starting_row + 1, starting_col - 4],
      [starting_row, starting_col - 4],
      [starting_row - 1, starting_col - 4],
      [starting_row, starting_col - 5],
      [starting_row, starting_col],
      [starting_row, starting_col + 1],
      [starting_row, starting_col + 2],
      [starting_row, starting_col + 3],
      [starting_row - 1, starting_col + 4],
      [starting_row, starting_col + 4],
      [starting_row + 1, starting_col + 4],
      [starting_row, starting_col + 5],
    ],
  };

  // Iterate over the grid and calculate the number of living
  // adjacent cells for each cell in the grid
  const coords = presets[option.toLowerCase()];
  if (coords) {
    for (let coord of coords) {
      const [row, col] = coord;
      next_grid[row][col].isAlive = true;
    }
  }
  return next_grid;
}

export {
  create2dArray,
  countAdjacentLivingCells,
  recalculateGrid,
  randomizeGrid,
  presetGrid,
};

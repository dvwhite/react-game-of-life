import React, { useEffect, useState } from "react";
import { scale } from "../constants/constants";
import "../index.scss";

// Helper functions
import { checkAdjacentCells } from "../utils/utils";

// Component imports
import Cell from "./Cell";

// Styled components
import styled from "styled-components";

const CenteredDiv = styled.div`
  margin: auto;
  margin-top: 1rem;
`;

const GridDiv = styled(CenteredDiv)`
  margin-left: 6%;
  margin-top: 2%;
  line-height: 0;
  box-shadow: 2px 4px 8px #444;
  overflow: hidden;
  resize: none;
`;

const Grid = ({ rows, cols, cells }) => {
  const [grid, setGrid] = useState(cells);

  // Set the grid size
  const width = rows * scale;
  const height = cols * scale;

  useEffect(() => {
    const arr = [...cells];
    cells.map((rowArr, row) =>
      rowArr.map(
        (colObj, col) => (arr[row][col] = { row, col, isAlive: false })
      )
    );
    console.log("Arr finished:", arr);
    setGrid(arr);
  }, [cells]);

  useEffect(() => {
    if (grid.length) {
      checkAdjacentCells(grid[0][0], grid);
    }
  }, [grid]);

  if (!grid) return <div>Loading...</div>;

  return (
    <GridDiv style={{ width: width, height: height }}>
      {grid.map((rowArr, row) =>
        rowArr.map((colArr, col) => {
          const cell = grid[row][col];
          return (
            <Cell
              row={cell.row}
              col={cell.col}
              key={`R${cell.col}C${cell.row}`}
              isAlive={cell.isAlive}
            />
          );
        })
      )}
    </GridDiv>
  );
};

export default Grid;

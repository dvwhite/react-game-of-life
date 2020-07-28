import React, { useEffect, useState } from "react";
import { cellSize } from "../constants/constants";
import "../index.scss";

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
  margin-bottom: 2%;
  line-height: 0;
  box-shadow: 2px 4px 8px #444;
  resize: none;
`;

const Grid = ({ rows, cols, cells, setCells, isRunning }) => {
  // Set the grid size
  const width = rows * cellSize;
  const height = cols * cellSize;

  if (!cells) return <div>Loading...</div>;

  return (
    <GridDiv style={{ minWidth: width, width: width, height: height }}>
      {cells.map((rowArr, row) =>
        rowArr.map((colArr, col) => {
          const cell = cells[row][col];
          return (
            <Cell
              cell={cell}
              key={`R${cell.col}C${cell.row}`}
              alive={cell.isAlive}
              cells={cells}
              setCells={setCells}
              isRunning={isRunning}
            />
          );
        })
      )}
    </GridDiv>
  );
};

export default Grid;

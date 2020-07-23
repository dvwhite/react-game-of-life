import React, { useState, useEffect } from "react";
import { scale } from "../constants/constants";
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
  margin: auto;
  border: 1px solid black;
  line-height: 0;
  box-shadow: 2px 4px 8px #444;
`;

const Grid = ({ rows, cols, cells }) => {
  // Set the grid size
  const width = rows * scale;
  const height = cols * scale;

  return (
    <GridDiv style={{ width: width, height: height }}>
      {cells.map((row, idx) =>
        row.map((col) => (
          <Cell
            row={row}
            col={col}
            key={idx}
            isAlive={true}
            id={`R${row}C${col}`}
          />
        ))
      )}
    </GridDiv>
  );
};

export default Grid;

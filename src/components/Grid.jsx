import React, { useState, useEffect } from "react";
import { singleCellWidth, singleCellHeight } from "../constants/constants";

// Component imports
import Cell from "./Cell";

// Styled components
import styled from "styled-components";

const CenteredDiv = styled.div`
  margin: auto;
  margin-top: 1rem;
  display: flex;
`;

const GridDiv = styled(CenteredDiv)`
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 1px solid black;
`;

const Grid = ({ rows, cols, cells }) => {
  const [cellsArr, setCellsArr] = useState([]);

  // Set the grid size
  const width = rows * singleCellWidth;
  const height = cols * singleCellHeight;

  useEffect(() => {
    // Initialize cellsArr to an empty 2D array
    // This will later hold the game objects representing each cell
    const arr = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        arr.push(
          <Cell row={i} col={j} alive={true} id={`R + ${i} + "C" + ${j}`} />
        );
      }
    }
    setCellsArr(arr);
  }, []);

  return (
    <GridDiv style={{ width: width, height: height }}>
      {cellsArr.map((cell, idx) => (
        <Cell key={idx} />
      ))}
    </GridDiv>
  );
};

export default Grid;

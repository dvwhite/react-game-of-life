import React from "react";
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
  margin-left: 6%;
  margin-top: 2%;
  line-height: 0;
  box-shadow: 2px 4px 8px #444;
  overflow: hidden;
  resize: none;
`;

const Grid = ({ rows, cols, cells }) => {
  // Set the grid size
  const width = rows * scale;
  const height = cols * scale;

  return (
    <GridDiv style={{ width: width, height: height }}>
      {cells.map((row, idx) =>
        row.map((col, idx2) => {
          return (
            <Cell row={row} col={col} key={`R${idx}C${idx2}`} isAlive={false} />
          );
        })
      )}
    </GridDiv>
  );
};

export default Grid;

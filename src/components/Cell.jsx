import React from "react";
import { cellSize } from "../constants/constants";
import "../index.scss";

// Styled component imports
import styled from "styled-components";

const Square = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: ${cellSize - 1}px;
  height: ${cellSize - 1}px;
  margin-bottom: -1px;
  margin-left: -1px;

  &:hover {
    background-color: #444;
  }
`;

const Cell = ({ cell, cells, setCells }) => {
  // Change the cell on click
  const changeColor = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cells[cell.row][cell.col] = { ...cell, isAlive: !cell.isAlive };
    setCells([...cells]);
  };

  return (
    <Square className={cell.isAlive ? "alive" : "dead"} onClick={changeColor} />
  );
};

export default Cell;

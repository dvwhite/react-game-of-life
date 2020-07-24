import React, { useState } from "react";
import { scale } from "../constants/constants";
import "../index.scss";

// Styled component imports
import styled from "styled-components";

const Square = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: ${scale - 1}px;
  height: ${scale - 1}px;
  margin-bottom: -1px;
  margin-left: -1px;

  &:hover {
    background-color: #444;
  }
`;

const Cell = ({ alive }) => {
  const [isAlive, setIsAlive] = useState(alive);

  // Change the cell on click or drag
  const changeColor = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAlive(!isAlive);
  };

  return (
    <Square
      className={isAlive ? "alive" : "dead"}
      onClick={changeColor}
      onDrag={changeColor}
    />
  );
};

export default Cell;

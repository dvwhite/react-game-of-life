import React, { useState } from "react";
import "../index.scss";

// Styled component imports
import styled from "styled-components";

const Square = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: 8.125%;
  height: 8.125%;
  margin-bottom: -1px;
  margin-left: -1px;

  &:hover {
    background-color: #444;
  }
`;

const Cell = ({ alive }) => {
  const [isAlive, setIsAlive] = useState(alive);
  const handleClick = (e) => {
    e.preventDefault();
    setIsAlive(!isAlive);
  };

  return (
    <Square className={isAlive ? "alive" : "dead"} onClick={handleClick} />
  );
};

export default Cell;

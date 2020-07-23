import React, { useState } from "react";

// Styled component imports
import styled from "styled-components";

const Square = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: 10px;
  height: 10px;
  margin-left: -1px;
  margin-bottom: -1px;

  &:hover {
    background-color: slateblue;
  }
`;

const Cell = ({ isAlive }) => {
  return <Square className={isAlive ? "alive" : "dead"} />;
};

export default Cell;

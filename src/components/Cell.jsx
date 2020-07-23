import React from "react";
import { scale } from "../constants/constants";
import "../index.css";

// Styled component imports
import styled from "styled-components";

const Square = styled.div`
  display: inline-block;
  border: 1px solid black;
  width: ${scale - 1}px;
  height: ${scale - 1}px;
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

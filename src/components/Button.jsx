import React from "react";

// Styled components
import styled from "styled-components";

const GrayButton = styled.button`
  background-color: lightgray;
  border: 1px solid black;
  width: 20%;
  outline: 0;
  box-shadow: 1px 2px 3px #444;

  &:active {
    box-shadow: 0px 1px 1px #444;
  }
`;

export { GrayButton };

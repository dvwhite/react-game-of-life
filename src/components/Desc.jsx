import React from "react";

// Styled component imports
import styled from "styled-components";

const TextContainer = styled.div`
  border: 1px solid black;
  width: 95%;
  margin-top: 2%;
  margin-right: 10%;
  display: flex;
  align-self: flex-start;
  flex-direction: column;
`;

const TextArea = styled.div`
  text-align: left;

  h2 {
    text-align: center;
  }

  p {
    margin: 2%;
    padding: 1%;
  }
`;

const Desc = () => {
  return (
    <TextContainer>
      <TextArea>
        <h2>The Rules</h2>
        <p>
          1. Any live cell with fewer than two live neighbours dies, as if by
          underpopulation.
        </p>
        <p>
          2. Any live cell with two or three live neighbours lives on to the
          next generation.
        </p>
        <p>
          3. Any live cell with more than three live neighbours dies, as if by
          overpopulation.
        </p>
        <p>
          4. Any dead cell with exactly three live neighbours becomes a live
          cell, as if by reproduction.
        </p>
      </TextArea>
    </TextContainer>
  );
};

export default Desc;

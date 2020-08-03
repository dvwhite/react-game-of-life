import React from "react";

// Styled component imports
import styled from "styled-components";

const TextContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-self: center;
  flex-direction: column;
`;

const TextArea = styled.div`
  text-align: left;

  h2 {
    text-align: center;
  }

  p {
    margin: 1%;
    padding: 1%;
  }
`;

const Desc = () => {
  return (
    <TextContainer>
      <TextArea>
        <h2>The Game of Life</h2>
        <p>
          The Game of Life is a zero player, cellular automata game created by
          mathematician John Horton Conway in 1970. The board is a
          two-dimensional grid of cells which can either be alive or dead.
        </p>
        <p>
          The game can be used to build a finite state machine with two
          counters, as well as AND, NOT and OR logic gates using gliders. This
          allows the game to serve as a universal Turing machine (it is Turing
          complete).
        </p>
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

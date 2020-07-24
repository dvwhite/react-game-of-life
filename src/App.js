import React, { useState, useEffect } from "react";
import { scale, width, height } from "./constants/constants";
import "./App.scss";
import "./index.scss";

// Helper functions
import { create2dArray } from "./utils/utils";

// Component imports
import Grid from "./components/Grid";
import Desc from "./components/Desc";

// Styled components
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function App() {
  const [cells, setCells] = useState([]);
  const rows = Math.floor(width / scale);
  const cols = Math.floor(height / scale);

  // Initialize the 2D array of game state when the component mounts
  useEffect(() => {
    const cellsArr = create2dArray(rows, cols, 0);
    setCells(cellsArr);
  }, []);

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Container>
        <Grid rows={rows} cols={cols} cells={cells} />
        <Desc />
      </Container>
    </div>
  );
}

export default App;

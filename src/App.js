import React, { useState, useEffect } from "react";
import { cellSize, width, height } from "./constants/constants";
import "./App.scss";
import "./index.scss";

// Helper functions
import { create2dArray, recalculateGrid } from "./utils/utils";

// Component imports
import Grid from "./components/Grid";
import Desc from "./components/Desc";
import ButtonGroup from "./components/ButtonGroup";
import { GrayButton } from "./components/Button";

// Styled components
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1%;
`;

function App() {
  const [cells, setCells] = useState([]);
  const [nextCells, setNextCells] = useState([]);
  const rows = Math.floor(width / cellSize);
  const cols = Math.floor(height / cellSize);

  // Initialize the 2D array of game state when the component mounts
  useEffect(() => {
    // Populate the grid with objects for each cell that track information
    // such as whether it is alive or dead, and it's row, col pos
    const cellsArr = create2dArray(rows, cols, 0);
    const nextCellsArr = create2dArray(rows, cols, 0);
    setCells(cellsArr);
    setNextCells(nextCellsArr);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const nextGrid = recalculateGrid(cells, nextCells);
    setNextCells(cells);
    setCells(nextGrid);
  };

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Container>
        <Grid
          rows={rows}
          cols={cols}
          cells={cells}
          setCells={setCells}
          setNextCells={setNextCells}
        />
        <Column>
          <Desc />
          <ButtonGroup>
            <GrayButton onClick={handleClick}>Next Generation</GrayButton>
          </ButtonGroup>
        </Column>
      </Container>
    </div>
  );
}

export default App;

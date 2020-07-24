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
  const [text, setText] = useState("Hello");
  const rows = Math.floor(width / cellSize);
  const cols = Math.floor(height / cellSize);

  // Initialize the 2D array of game state when the component mounts
  useEffect(() => {
    // Populate the grid with objects for each cell that track information
    // such as whether it is alive or dead, and it's row, col pos
    const cellsArr = create2dArray(rows, cols, 0);
    cellsArr.map((rowArr, row) =>
      rowArr.map(
        (colObj, col) => (cellsArr[row][col] = { row, col, isAlive: false })
      )
    );
    console.log("Arr finished:", cellsArr);
    setCells(cellsArr);
  }, []);

  const setIsAlive = (row, col, isAlive) => {
    cells[row][col].isAlive = isAlive;
    setCells(cells);
    console.log("click", cells[row][col]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    //recalculateGrid(cells);
    setCells([
      [{ col: 0, row: 0, isAlive: false }],
      [{ col: 0, row: 1, isAlive: true }],
    ]);
    setText("David");
    console.log(cells);
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
          setIsAlive={setIsAlive}
          text={text}
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

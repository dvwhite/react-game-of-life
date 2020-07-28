import React, { useState, useEffect } from "react";
import { cellSize, width, height, speed } from "./constants/constants";
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
  padding-bottom: 2%;
`;

function App() {
  const [cells, setCells] = useState([]);
  const [nextCells, setNextCells] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const rows = Math.floor(width / cellSize);
  const cols = Math.floor(height / cellSize);

  // Initialize the 2D array of game state when the component mounts
  useEffect(() => {
    initializeGrids();
  }, []);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        const nextGrid = recalculateGrid(cells, nextCells);
        setNextCells(cells);
        setCells(nextGrid);
      }, speed);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, cells, nextCells]);

  const initializeGrids = () => {
    // Populate the grid with objects for each cell that track information
    // such as whether it is alive or dead, and it's row, col pos
    const cellsArr = create2dArray(rows, cols, 0);
    const nextCellsArr = create2dArray(rows, cols, 0);
    setCells(cellsArr);
    setNextCells(nextCellsArr);
  };

  // Actions
  const start = () => {
    // Start running the simuation
    setIsRunning(true);
  };

  const stop = () => {
    // Stop running the simuation
    setIsRunning(false);
  };

  const step = () => {
    // Go to the next generation of the grid
    console.log("Stepping");
    const nextGrid = recalculateGrid(cells, nextCells);
    setNextCells(cells);
    setCells(nextGrid);
  };

  const reset = () => {
    // Reset the grid
    setIsRunning(false);
    initializeGrids();
  };

  // Button handlers
  const handleClickStart = (e) => {
    //  Start
    e.preventDefault();
    start();
  };

  const handleClickStop = (e) => {
    // Stop
    e.preventDefault();
    stop();
  };

  const handleClickStep = (e) => {
    // Step
    e.preventDefault();
    if (!isRunning) {
      step();
    }
  };

  const handleClickReset = (e) => {
    // Reset
    e.preventDefault();
    reset();
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
          isRunning={isRunning}
        />
        <Column>
          <Desc />
          <ButtonGroup>
            <GrayButton onClick={handleClickStart}>Start</GrayButton>
            <GrayButton onClick={handleClickStop}>Stop</GrayButton>
            <GrayButton onClick={handleClickStep}>Step</GrayButton>
            <GrayButton onClick={handleClickReset}>Reset</GrayButton>
          </ButtonGroup>
        </Column>
      </Container>
    </div>
  );
}

export default App;

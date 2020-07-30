import React, { useState, useEffect } from "react";
import { cellSize, width, height, speed } from "./constants/constants";
import "./App.scss";
import "./index.scss";

// Helper functions
import {
  create2dArray,
  recalculateGrid,
  randomizeGrid,
  presetGrid,
} from "./utils/utils";

// Component imports
import Grid from "./components/Grid";
import Desc from "./components/Desc";
import Dropdown from "./components/Dropdown";
import ButtonGroup from "./components/ButtonGroup";
import { GrayButton } from "./components/Button";

// Styled components
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: lightgray;
  color: black;
  border: 1px solid black;
  border-top: 0;

  & > p {
    font-weight: bold;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const GridColumn = styled(Column)`
  margin-top: 2%;
  margin-left: 2%;
  margin-bottom: 2%;
`;

const TextColumn = styled(Column)`
  margin-top: 2%;
  margin-right: 2%;
  margin-left: 2%;
  width: 33%;
`;

function App() {
  const [cells, setCells] = useState([]);
  const [nextCells, setNextCells] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [generations, setGenerations] = useState(0);
  const [selValue, setSelValue] = useState("Select a preset");
  const rows = Math.floor(width / cellSize);
  const cols = Math.floor(height / cellSize);
  const presets = ["Glider", "Scrubber", "Pre-pulsar"];

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
        setGenerations(generations + 1);
      }, speed);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, cells, nextCells, generations]);

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
    const nextGrid = recalculateGrid(cells, nextCells);
    setNextCells(cells);
    setCells(nextGrid);
    setGenerations(generations + 1);
  };

  const reset = () => {
    // Reset the grid
    setIsRunning(false);
    initializeGrids();
    setGenerations(0);
    setSelValue("Select a preset");
  };

  // Button handlers
  const handleClickStart = (e) => {
    //  Start
    e.preventDefault();
    if (!isRunning) {
      start();
    }
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

  const handleClickRandom = (e) => {
    // Randomize
    e.preventDefault();
    if (!isRunning) {
      const nextGrid = randomizeGrid(cells, nextCells);
      setNextCells(cells);
      setCells(nextGrid);
      setGenerations(0);
    }
  };

  const handleSelect = (e) => {
    if (!isRunning) {
      setSelValue(e.target.value);
      const nextGrid = presetGrid(e.target.value, cells, nextCells);
      setNextCells(cells);
      setCells(nextGrid);
      setGenerations(0);
    }
  };

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Container>
        <GridColumn>
          <Grid
            rows={rows}
            cols={cols}
            cells={cells}
            setCells={setCells}
            setNextCells={setNextCells}
            isRunning={isRunning}
          />
        </GridColumn>
        <TextColumn>
          <Desc />
          <Row>
            <p>Presets</p>
            <Dropdown
              options={presets}
              onChange={(e) => handleSelect(e)}
              placeholder={"Select a preset"}
              value={selValue}
            />
          </Row>
          <ButtonGroup>
            <GrayButton onClick={handleClickStart}>Start</GrayButton>
            <GrayButton onClick={handleClickStop}>Stop</GrayButton>
            <GrayButton onClick={handleClickStep}>Step</GrayButton>
            <GrayButton onClick={handleClickRandom}>Random</GrayButton>
            <GrayButton onClick={handleClickReset}>Reset</GrayButton>
          </ButtonGroup>
          <h3>Generations: {generations}</h3>
        </TextColumn>
      </Container>
    </div>
  );
}

export default App;

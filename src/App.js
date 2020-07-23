import React, { useState, useEffect } from "react";
import { scale, width, height } from "./constants/constants";
import "./App.css";

// Helper functions
import { create2dArray } from "./utils/utils";

// Component imports
import Grid from "./components/Grid";

function App() {
  const [cells, setCells] = useState([]);
  const rows = width / scale;
  const cols = height / scale;

  // Initialize the 2D array of game state when the component mounts
  useEffect(() => {
    const cellsArr = create2dArray(rows, cols, 0);
    setCells(cellsArr);
  }, []);

  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Grid rows={rows} cols={cols} cells={cells} />
      <p>Rules of the Game</p>
    </div>
  );
}

export default App;

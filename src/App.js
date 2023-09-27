import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import EndPanel from "./components/EndPanel/EndPanel";
import React, { useState } from "react";

function App() {
  const [gameState, setGameState] = useState("pre");

  return (
    <>
      {(gameState === "pre" || gameState === "in-progress") && (
        <MainPanel gameState={gameState} setGameState={setGameState} />
      )}
      {gameState === "end" && (
        <EndPanel gameState={gameState} setGameState={setGameState} />
      )}
    </>
  );
}

export default App;

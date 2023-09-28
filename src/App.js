import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import EndPanel from "./components/EndPanel/EndPanel";
import React, { useState } from "react";

function App() {
  const [gameState, setGameState] = useState("pre");

  return (
    <>
      {/* main panel is alway showing - no render logic */}
      <MainPanel gameState={gameState} setGameState={setGameState} />

      {gameState === "end" && (
        <EndPanel gameState={gameState} setGameState={setGameState} />
      )}
    </>
  );
}

export default App;

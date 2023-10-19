import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import EndPanel from "./components/EndPanel/EndPanel";
import React, { useState } from "react";

function App() {
  const [gameState, setGameState] = useState("pre");
  const [boardState, setBoardState] = useState(
    new Array(3).fill(null).map(() => new Array(3).fill(null))
  );
  const [playerTurn, setPlayerTurn] = useState(null);
  const [turnCounter, setTurnCounter] = useState(1);

  return (
    <>
      {/* main panel is alway showing - no render logic */}
      <MainPanel
        gameState={gameState}
        setGameState={setGameState}
        boardState={boardState}
        setBoardState={setBoardState}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        turnCounter={turnCounter}
        setTurnCounter={setTurnCounter}
      />

      {gameState === "end" && (
        <EndPanel
          gameState={gameState}
          setGameState={setGameState}
          boardState={boardState}
          setBoardState={setBoardState}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
          turnCounter={turnCounter}
          setTurnCounter={setTurnCounter}
        />
      )}
    </>
  );
}

export default App;

import React, { useState } from "react";
import GamePanel from "./GamePanel/GamePanel";
import MenuPanel from "./MenuPanel/MenuPanel";
import styles from "./MainPanel.module.scss";

const MainPanel = ({
  gameState,
  setGameState,
  boardState,
  setBoardState,
  playerTurn,
  setPlayerTurn,
  turnCounter,
  setTurnCounter,
}) => {
  return (
    <div className={styles.panel}>
      {gameState === "pre" && (
        <MenuPanel
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
          setGameState={setGameState}
        />
      )}
      {(gameState === "in-progress" || gameState === "end") && (
        <GamePanel
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
          turnCounter={turnCounter}
          setTurnCounter={setTurnCounter}
          gameState={gameState}
          setGameState={setGameState}
          boardState={boardState}
          setBoardState={setBoardState}
        />
      )}
    </div>
  );
};

export default MainPanel;

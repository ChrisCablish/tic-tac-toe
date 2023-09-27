import React, { useState } from "react";
import GamePanel from "./GamePanel/GamePanel";
import MenuPanel from "./MenuPanel/MenuPanel";
import styles from "./MainPanel.module.scss";

const MainPanel = ({ gameState, setGameState }) => {
  const [playerTurn, setPlayerTurn] = useState(null);
  const [turnCounter, setTurnCounter] = useState(1);
  return (
    <div className={styles.panel}>
      {gameState === "pre" && (
        <MenuPanel
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
          setGameState={setGameState}
        />
      )}
      {gameState === "in-progress" && (
        <GamePanel
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
          turnCounter={turnCounter}
          setTurnCounter={setTurnCounter}
        />
      )}
    </div>
  );
};

export default MainPanel;

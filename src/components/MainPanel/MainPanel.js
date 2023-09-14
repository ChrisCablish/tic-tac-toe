import React from "react";
import GamePanel from "./GamePanel/GamePanel";

const MainPanel = ({ turn, setTurn }) => {
  return <GamePanel turn={turn} setTurn={setTurn} />;
};

export default MainPanel;

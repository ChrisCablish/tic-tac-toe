import React from "react";
import GamePanel from "./GamePanel/GamePanel";
import MenuPanel from "./MenuPanel/MenuPanel";
import styles from "./MainPanel.module.scss";

const MainPanel = ({ turn, setTurn }) => {
  return (
    <div className={styles.panel}>
      <GamePanel turn={turn} setTurn={setTurn} />
      <MenuPanel turn={turn} setTurn={setTurn} />
    </div>
  );
};

export default MainPanel;

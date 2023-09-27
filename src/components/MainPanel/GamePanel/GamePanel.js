import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GamePanel.module.scss";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SingleSquare from "./SingleSquare/SingleSquare";
import Header from "./Header/Header";
import Score from "./Score/Score";
import React, { useState, useEffect } from "react";

// Importing utility functions
import * as gameUtils from "../../../utils/gameUtils";

const GamePanel = ({
  turnCounter,
  setTurnCounter,
  playerTurn,
  setPlayerTurn,
  gameState,
  setGameState,
}) => {
  const [boardState, setBoardState] = useState(
    new Array(3).fill(null).map(() => new Array(3).fill(null))
  );

  const handleClick = (rowIndex, colIndex) => {
    if (!boardState[rowIndex][colIndex]) {
      const newBoardState = boardState.map((row) => row.slice());
      const squareData = {
        symbol: turnCounter % 2 !== 0 ? "x" : "o",
        player: playerTurn,
      };
      newBoardState[rowIndex][colIndex] = squareData;
      setBoardState(newBoardState);
      setTurnCounter((prevCounter) => prevCounter + 1);
      setPlayerTurn(playerTurn === 1 ? 2 : 1);
    }
  };

  useEffect(() => {
    if (gameUtils.inspectForWins(boardState, "x")) {
      setGameState("end");
      console.log("x wins the round");
    }
    if (gameUtils.inspectForWins(boardState, "o")) {
      setGameState("end");
      console.log("o wins the round");
    }
  });

  const renderCol = (rowIndex, colIndex) => {
    return (
      <Col
        key={colIndex}
        className={styles.myCol}
        onClick={() => handleClick(rowIndex, colIndex)}
      >
        <SingleSquare
          squareData={boardState[rowIndex][colIndex]}
          turnCounter={turnCounter}
        />
      </Col>
    );
  };

  return (
    <>
      <Container className={styles.myContainer}>
        <Header turnCounter={turnCounter} />
        {boardState.map((row, rowIndex) => (
          <Row key={rowIndex} className={styles.myRow}>
            {row.map((_, colIndex) => renderCol(rowIndex, colIndex))}
          </Row>
        ))}
      </Container>
      <Score />
    </>
  );
};
export default GamePanel;

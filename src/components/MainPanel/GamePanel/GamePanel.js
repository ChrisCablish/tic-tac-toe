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
  boardState,
  setBoardState,
}) => {
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

  const XWinObject = gameUtils.inspectForWins(boardState, "x");
  const OWinObject = gameUtils.inspectForWins(boardState, "o");

  const [winsByX, setWinsByX] = useState(0);
  const [winsByO, setWinsByO] = useState(0);
  const [ties, setTies] = useState(0);

  useEffect(() => {
    if (XWinObject) {
      setGameState("end");
      setWinsByX(winsByX + 1);
    }
    if (OWinObject) {
      setGameState("end");
      setWinsByO(winsByO + 1);
    }
    const boardIsFull = boardState.flat().every((element) => element !== null);
    if (boardIsFull && !XWinObject && !OWinObject) {
      setGameState("end");
      setTies(ties + 1);
    }
  }, [boardState]);

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
        <Score winsByX={winsByX} winsByO={winsByO} ties={ties} />
      </Container>
    </>
  );
};
export default GamePanel;

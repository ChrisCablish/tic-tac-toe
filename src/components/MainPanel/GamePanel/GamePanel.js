import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GamePanel.module.scss";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SingleSquare from "./SingleSquare/SingleSquare";
import Header from "./Header/Header";
import Score from "./Score/Score";
import React, { useState, useEffect } from "react";

const GamePanel = ({
  turnCounter,
  setTurnCounter,
  playerTurn,
  setPlayerTurn,
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

    if (inspectForWins("x")) {
      console.log("x wins the round");
    }

    if (inspectForWins("o")) {
      console.log("o wins the round");
    }
  };

  const inspectForHorizontalWin = (symbol) => {
    return (
      boardState[0].every((square) => square && square.symbol === symbol) ||
      boardState[1].every((square) => square && square.symbol === symbol) ||
      boardState[2].every((square) => square && square.symbol === symbol)
    );
  };

  const inspectForVerticalWin = (symbol) => {
    return (
      boardState.every((row) => row[0] && row[0].symbol === symbol) ||
      boardState.every((row) => row[1] && row[1].symbol === symbol) ||
      boardState.every((row) => row[2] && row[2].symbol === symbol)
    );
  };

  const inspectForDiagonalDownWin = (symbol) => {
    return boardState[0][0] &&
      boardState[0][0].symbol === symbol &&
      boardState[1][1] &&
      boardState[1][1].symbol === symbol &&
      boardState[2][2] &&
      boardState[2][2].symbol === symbol
      ? true
      : false;
  };

  const inspectForDiagonalUpWin = (symbol) => {
    return boardState[2][0] &&
      boardState[2][0].symbol === symbol &&
      boardState[1][1] &&
      boardState[1][1].symbol === symbol &&
      boardState[0][2] &&
      boardState[0][2].symbol === symbol
      ? true
      : false;
  };

  const inspectForWins = (symbol) => {
    return (
      inspectForVerticalWin(symbol) ||
      inspectForHorizontalWin(symbol) ||
      inspectForDiagonalDownWin(symbol) ||
      inspectForDiagonalUpWin(symbol)
    );
  };

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

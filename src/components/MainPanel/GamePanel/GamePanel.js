import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GamePanel.module.scss";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SingleSquare from "./SingleSquare/SingleSquare";
import Header from "./Header/Header";
import Score from "./Score/Score";
import React, { useState, useEffect } from "react";

const GamePanel = ({ turn, setTurn }) => {
  const [turnCounter, setTurnCounter] = useState(1);

  const [boardState, setBoardState] = useState(
    new Array(3).fill(null).map(() => new Array(3).fill(null))
  );
  const handleClick = (rowIndex, colIndex) => {
    if (!boardState[rowIndex][colIndex]) {
      const newBoardState = boardState.map((row) => row.slice());

      //**For the line directly below this comment */
      // what if i stored an object like this
      // {
      //   turn:turn,
      //    symbol: x
      //   }

      //inside of newBoardState so that both symbol and turn could be accessed by SingleSquare to decide what symbol renders?? (check out
      //conditionals inside SingleSquare. i.e - i want an XIcon to render if it is player ones turn and player ones symbol is x)

      newBoardState[rowIndex][colIndex] = turn;
      setBoardState(newBoardState);
      setTurn(turn === "p1" ? "p2" : "p1");

      setTurnCounter((prevCounter) => prevCounter + 1);
    }
  };

  const renderSquare = (rowIndex, colIndex) => (
    <Col
      key={colIndex}
      className={styles.myCol}
      onClick={() => handleClick(rowIndex, colIndex)}
    >
      <SingleSquare
        clickedSquare={boardState[rowIndex][colIndex]}
        turnCounter={turnCounter}
      />
    </Col>
  );
  return (
    <>
      <Container className={styles.myContainer}>
        <Header turnCounter={turnCounter} />

        {boardState.map((row, rowIndex) => (
          <Row key={rowIndex} className={styles.myRow}>
            {row.map((_, colIndex) => renderSquare(rowIndex, colIndex))}
          </Row>
        ))}
      </Container>
      <Score />
    </>
  );
};
export default GamePanel;

// import React, { useState } from "react";
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
  const [boardState, setBoardState] = useState(
    new Array(3).fill(null).map(() => new Array(3).fill(false))
  );
  const handleClick = (rowIndex, colIndex) => {
    const newBoardState = boardState.map((row) => row.slice());
    newBoardState[rowIndex][colIndex] = true;
    setBoardState(newBoardState);
    if (turn === "p1") {
      setTurn("p2");
    } else {
      setTurn("p1");
    }
  };

  useEffect(() => {
    console.log(turn);
  }, [turn]);

  const renderSquare = (rowIndex, colIndex) => (
    <Col
      key={colIndex}
      className={styles.myCol}
      onClick={() => handleClick(rowIndex, colIndex)}
    >
      <SingleSquare isClicked={boardState[rowIndex][colIndex]} turn={turn} />
    </Col>
  );
  return (
    <>
      <Container className={styles.myContainer}>
        <Header turn={turn} />
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

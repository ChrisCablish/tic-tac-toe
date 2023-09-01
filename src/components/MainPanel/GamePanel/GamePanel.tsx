import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GamePanel.module.scss";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SingleSquare from "./SingleSquare/SingleSquare";
import { useState } from "react";
// import { click } from "@testing-library/user-event/dist/click";

const GamePanel: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    console.log("button clicked");
  };

  const renderSquare = () => (
    <Col className={styles.myCol} onClick={handleClick}>
      <SingleSquare clicked={clicked} />
    </Col>
  );

  // Create a 3x3 board representation
  const board = Array(3)
    .fill(null)
    .map(() => Array(3).fill(null));

  return (
    //generate board dynamically using .map()
    <Container className={styles.myContainer}>
      {board.map((row, rowIndex) => (
        <Row key={rowIndex} className={styles.myRow}>
          {row.map((_, colIndex) => (
            <React.Fragment key={colIndex}>{renderSquare()}</React.Fragment>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default GamePanel;

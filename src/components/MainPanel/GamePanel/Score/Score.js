import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styles from "./Score.module.scss";

const Score = ({ winsByX, winsByO, ties }) => {
  return (
    <Row className={styles.myRow}>
      <Col className={styles.myCol}>
        <span className="player">X</span>
        <span className="number">{winsByX}</span>
      </Col>
      <Col className={styles.myCol}>
        <span className="player">Ties</span>
        <span className="number">{ties}</span>
      </Col>
      <Col className={styles.myCol}>
        <span className="player">O</span>
        <span className="number">{winsByO}</span>
      </Col>
    </Row>
  );
};

export default Score;

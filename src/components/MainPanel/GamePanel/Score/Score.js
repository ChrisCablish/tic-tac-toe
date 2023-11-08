import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styles from "./Score.module.scss";

const Score = ({ winsByX, winsByO, ties }) => {
  return (
    <Row className={styles.myRow}>
      <Col className={`${styles.myCol} ${styles.left}`}>
        <span className={styles.player}>X</span>
        <span className={styles.number}>{winsByX}</span>
      </Col>
      <Col className={`${styles.myCol} ${styles.center}`}>
        <span className={styles.player}>Ties</span>
        <span className={styles.number}>{ties}</span>
      </Col>
      <Col className={`${styles.myCol} ${styles.right}`}>
        <span className={styles.player}>O</span>
        <span className={styles.number}>{winsByO}</span>
      </Col>
    </Row>
  );
};

export default Score;

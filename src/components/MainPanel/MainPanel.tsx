import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MainPanel.module.scss";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const MainPanel: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col className={styles.myCol}></Col>
        <Col className={styles.myCol}></Col>
        <Col className={styles.myCol}></Col>
      </Row>
      <Row>
        <Col className={styles.myCol}></Col>
        <Col className={styles.myCol}></Col>
        <Col className={styles.myCol}></Col>
      </Row>
      <Row>
        <Col className={styles.myCol}></Col>
        <Col className={styles.myCol}></Col>
        <Col className={styles.myCol}></Col>
      </Row>
    </Container>
  );
};

export default MainPanel;

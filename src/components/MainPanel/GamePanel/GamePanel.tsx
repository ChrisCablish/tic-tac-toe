import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GamePanel.module.scss";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { ReactComponent as MySvgIcon } from "../../../assets/icon-x.svg";

const GamePanel: React.FC = () => {
  return (
    <Container className={styles.myContainer}>
      <Row className={styles.myRow}>
        <Col className={styles.myCol}>
          {" "}
          <MySvgIcon />{" "}
        </Col>
        <Col className={styles.myCol}>
          {" "}
          <MySvgIcon />{" "}
        </Col>
        <Col className={styles.myCol}>
          {" "}
          <MySvgIcon />{" "}
        </Col>
      </Row>
      <Row className={styles.myRow}>
        <Col className={styles.myCol}>
          {" "}
          <MySvgIcon />{" "}
        </Col>
        <Col className={styles.myCol}>
          {" "}
          <MySvgIcon />{" "}
        </Col>
        <Col className={styles.myCol}>
          {" "}
          <MySvgIcon />{" "}
        </Col>
      </Row>
      <Row className={styles.myRow}>
        <Col className={styles.myCol}>
          {" "}
          <MySvgIcon />{" "}
        </Col>
        <Col className={styles.myCol}>
          {" "}
          <MySvgIcon />{" "}
        </Col>
        <Col className={styles.myCol}>
          {" "}
          <MySvgIcon />{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default GamePanel;

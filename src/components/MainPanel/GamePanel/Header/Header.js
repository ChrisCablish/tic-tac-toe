import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.scss";
import logo from "../../../../assets/logo.svg";
import buttonImage from "../../../../assets/icon-restart.svg";
import xIcon from "../../../../assets/icon-x.svg";
import oIcon from "../../../../assets/icon-o.svg";

const Header = ({ turnCounter, setBoardState }) => {
  const resetButtonHandler = () => {
    setBoardState(new Array(3).fill(null).map(() => new Array(3).fill(null)));
  };
  return (
    <Row className={styles.myRow}>
      <Col className={`${styles.myCol} ${styles.left}`}>
        <img src={logo}></img>
      </Col>
      <Col className={`${styles.myCol} ${styles.center}`}>
        <div className={styles.iconHolder}>
          <img src={turnCounter % 2 === 0 ? oIcon : xIcon}></img>
        </div>
        <span>Turn</span>
      </Col>
      <Col className={`${styles.myCol} ${styles.right}`}>
        <button onClick={resetButtonHandler}>
          <img src={buttonImage}></img>
        </button>
      </Col>
    </Row>
  );
};

export default Header;

import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.scss";
import logo from "../../../../assets/logo.svg";
import buttonImage from "../../../../assets/icon-restart.svg";
import xIcon from "../../../../assets/icon-x.svg";

const Header = () => {
  return (
    <Row className={styles.myRow}>
      <Col className={`${styles.myCol} ${styles.left}`}>
        <img src={logo}></img>
      </Col>
      <Col className={`${styles.myCol} ${styles.center}`}>
        <div className={styles.iconHolder}>
          <img src={xIcon}></img>
        </div>
        <span>Turn</span>
      </Col>
      <Col className={`${styles.myCol} ${styles.right}`}>
        <button>
          <img src={buttonImage}></img>
        </button>
      </Col>
    </Row>
  );
};

export default Header;

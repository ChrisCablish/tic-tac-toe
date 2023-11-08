// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styles from "./MenuPanel.module.scss";
import logo from "../../../assets/logo.svg";
import iconODark from "../../../assets/dark-fill-icon-o.svg";
import iconXDark from "../../../assets/dark-fill-icon-x.svg";
import iconOLight from "../../../assets/light-fill-icon-o.svg";
import iconXLight from "../../../assets/light-fill-icon-x.svg";
// import React, { useState, useEffect } from "react";

const MenuPanel = ({ setGameState, playerTurn, setPlayerTurn }) => {
  const symbolClickHandler = (symbol) => {
    symbol === "x"
      ? setPlayerTurn(1)
      : symbol === "o"
      ? setPlayerTurn(2)
      : setPlayerTurn(null);
  };

  const startClickHandler = () => {
    setGameState("in-progress");
  };

  return (
    <div className={styles.menu}>
      <div className={styles.logoHolder}>
        <img src={logo} alt=""></img>
      </div>
      <div className={styles.symbolPicker}>
        <span className={styles.pick}>Pick Player 1's Mark</span>
        <Container>
          <Row className={styles.bsRow}>
            <Col
              className={`${styles.symbolHolder} ${
                playerTurn === 1 ? styles.selected : ""
              }`}
              onClick={() => symbolClickHandler("x")}
            >
              <img
                className={styles.pickedLogo}
                src={playerTurn === 1 ? iconXDark : iconXLight}
                alt=""
              ></img>
            </Col>
            <Col
              className={`${styles.symbolHolder} ${
                playerTurn === 2 ? styles.selected : ""
              }`}
              onClick={() => symbolClickHandler("o")}
            >
              <img
                className={styles.pickedLogo}
                src={playerTurn === 2 ? iconODark : iconOLight}
                alt=""
              ></img>
            </Col>
          </Row>
        </Container>
        <span className={styles.reminder}>Remember: X Goes First</span>
      </div>
      <div className={styles.buttonHolder}>
        <button className={styles.vsPlayer} onClick={startClickHandler}>
          New Game (2 Player)
        </button>
      </div>
    </div>
  );
};

export default MenuPanel;

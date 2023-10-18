// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styles from "./MenuPanel.module.scss";
import logo from "../../../assets/logo.svg";
import iconO from "../../../assets/selection-icon-o.svg";
import iconX from "../../../assets/selection-icon-x.svg";
// import React, { useState, useEffect } from "react";

const MenuPanel = ({ setGameState, setPlayerTurn }) => {
  const symbolClickHandler = (symbol) => {
    symbol === "x"
      ? setPlayerTurn(1)
      : symbol === "o"
      ? setPlayerTurn(2)
      : setPlayerTurn(null);
  };

  const opponentTypeClickHandler = (opponentType) => {
    setGameState("in-progress");
  };
  //this is the master branch

  return (
    <div className={styles.menu}>
      <div className={styles.logoHolder}>
        <img src={logo} alt=""></img>
      </div>
      <div className={styles.symbolPicker}>
        <span>Pick Player 1's Mark</span>
        <Container>
          <Row>
            <Col
              className={styles.symbolHolder}
              onClick={() => symbolClickHandler("x")}
            >
              <img src={iconX} alt=""></img>
            </Col>
            <Col
              className={styles.symbolHolder}
              onClick={() => symbolClickHandler("o")}
            >
              <img src={iconO} alt=""></img>
            </Col>
          </Row>
        </Container>
        <span>Remember: X Goes First</span>
      </div>
      <div className={styles.buttonHolder}>
        <button className={styles.vsCPU}>New Game (vs CPU)</button>
        <button
          className={styles.vsPlayer}
          onClick={() => {
            opponentTypeClickHandler("player");
          }}
        >
          New Game (vs Player)
        </button>
      </div>
    </div>
  );
};

export default MenuPanel;

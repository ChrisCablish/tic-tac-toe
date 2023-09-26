// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import styles from "./MenuPanel.module.scss";
import logo from "../../../assets/logo.svg";
import iconX from "../../../assets/icon-x-outline.svg";
import iconO from "../../../assets/icon-o-outline.svg";
import symbolStructure from "../symbolStructure";
import React, { useState, useEffect } from "react";

const MenuPanel = ({ playerTurn, setPlayerTurn }) => {
  const clickHandler = (symbol) => {
    symbol === "x"
      ? setPlayerTurn(1)
      : symbol === "o"
      ? setPlayerTurn(2)
      : setPlayerTurn(null);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.logoHolder}>
        <img src={logo}></img>
      </div>
      <div className={styles.symbolPicker}>
        <span>Pick Player 1's Mark</span>
        <Container>
          <Row>
            <Col className={styles.symbolHolder} onClick={clickHandler("x")}>
              <img src={iconX}></img>
            </Col>
            <Col className={styles.symbolHolder} onClick={clickHandler("o")}>
              <img src={iconO}></img>
            </Col>
          </Row>
        </Container>
        <span>Remember: X Goes First</span>
      </div>
      <div className={styles.buttonHolder}>
        <button className={styles.vsCPU}>New Game (vs CPU)</button>
        <button className={styles.vsPlayer}>New Game (vs Player)</button>
      </div>
    </div>
  );
};

export default MenuPanel;

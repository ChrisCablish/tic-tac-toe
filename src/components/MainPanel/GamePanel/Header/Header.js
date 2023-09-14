import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.scss";

const Header = () => {
  return (
    <Container>
      <span className={styles.header}>Header</span>
    </Container>
  );
};

export default Header;

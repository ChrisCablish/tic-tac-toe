import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.scss";
import logo from "../../../../assets/logo.svg";
import buttonImage from "../../../../assets/icon-restart.svg";
import xIcon from "../../../../assets/light-fill-icon-x.svg";
import oIcon from "../../../../assets/light-fill-icon-o.svg";

const Header = ({ turnCounter, setBoardState }) => {
  const resetButtonHandler = () => {
    setBoardState(new Array(3).fill(null).map(() => new Array(3).fill(null)));
  };
  return (
    <Row className={styles.myRow}>
      <Col className={`${styles.myCol} ${styles.left}`}>
        <img className={styles.logo} src={logo} alt=""></img>
      </Col>
      <Col className={`${styles.myCol} ${styles.center}`}>
        <div className={styles.iconHolder}>
          <img src={turnCounter % 2 === 0 ? oIcon : xIcon} alt=""></img>
        </div>
        <span className={styles.turn}>Turn</span>
      </Col>
      <Col className={`${styles.myCol} ${styles.right}`}>
        <button className={styles.resetButton} onClick={resetButtonHandler}>
          <img src={buttonImage} alt=""></img>
        </button>
      </Col>
    </Row>
  );
};

export default Header;

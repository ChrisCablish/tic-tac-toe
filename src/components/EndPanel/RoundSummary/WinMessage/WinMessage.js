import iconX from "../../../../assets/icon-x.svg";
import iconO from "../../../../assets/icon-o.svg";
import styles from "./WinMessage.module.scss";

const WinMessage = ({ boardState, XWinObject, OWinObject }) => {
  return (
    <>
      <span className={styles.playerWins}>
        Player{" "}
        {XWinObject
          ? XWinObject.player
          : OWinObject
          ? OWinObject.player
          : "unknown"}{" "}
        Wins
      </span>
      <div className="symbol-winner">
        <div className="img-container">
          <img
            src={XWinObject ? iconX : iconO}
            className="symbol"
            alt="symbol"
          ></img>
        </div>
        <h1 className={styles.takes}>Takes The Round</h1>
      </div>
    </>
  );
};

export default WinMessage;

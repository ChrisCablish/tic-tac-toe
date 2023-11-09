import WinMessage from "./WinMessage/WinMessage";
import TieMessage from "./TieMessage/TieMessage";
import styles from "./RoundSummary.module.scss";
import * as gameUtils from "../../../utils/gameUtils";

const RoundSummary = ({
  boardState,
  setBoardState,
  setGameState,
  gameState,
  playerTurn,
  setPlayerTurn,
  turnCounter,
  setTurnCounter,
}) => {
  const quitButtonHandler = () => {
    setGameState("pre");
    setBoardState(new Array(3).fill(null).map(() => new Array(3).fill(null)));
    setPlayerTurn(1);
    setTurnCounter(1);
  };

  const nextRoundButtonHandler = () => {
    setGameState("in-progress");
    setBoardState(new Array(3).fill(null).map(() => new Array(3).fill(null)));
    setPlayerTurn(1);
    setTurnCounter(1);
  };

  const XWinObject = gameUtils.inspectForWins(boardState, "x");
  const OWinObject = gameUtils.inspectForWins(boardState, "o");

  let isATie;
  if (gameState === "end") {
    if (!XWinObject && !OWinObject) {
      isATie = true;
    } else {
      isATie = false;
    }
  }

  return (
    <div className={styles.wholeRoundSummary}>
      {!isATie && (
        <WinMessage
          boardState={boardState}
          XWinObject={XWinObject}
          OWinObject={OWinObject}
        />
      )}
      {isATie && <TieMessage />}
      <div className={styles.buttons}>
        <button className={styles.quit} onClick={quitButtonHandler}>
          Quit
        </button>
        <button
          className={
            XWinObject
              ? styles.blue
              : OWinObject
              ? styles.yellow
              : styles.yellow
          }
          onClick={nextRoundButtonHandler}
        >
          Next Round
        </button>
      </div>
    </div>
  );
};
export default RoundSummary;

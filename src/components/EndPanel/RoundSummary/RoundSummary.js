import iconX from "../../../assets/icon-x.svg";
import iconO from "../../../assets/icon-o.svg";

import * as gameUtils from "../../../utils/gameUtils";

const RoundSummary = ({
  boardState,
  setBoardState,
  setGameState,
  playerTurn,
  setPlayerTurn,
  turnCounter,
  setTurnCounter,
}) => {
  const XWinObject = gameUtils.inspectForWins(boardState, "x");
  const OWinObject = gameUtils.inspectForWins(boardState, "o");

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

  return (
    <>
      <span>
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
        <h1>Takes The Round</h1>
      </div>
      <div className="buttons">
        <button className="quit" onClick={quitButtonHandler}>
          Quit
        </button>
        <button className="next-round" onClick={nextRoundButtonHandler}>
          Next Round
        </button>
      </div>
    </>
  );
};
export default RoundSummary;

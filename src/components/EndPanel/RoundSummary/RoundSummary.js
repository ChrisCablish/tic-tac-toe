import iconX from "../../../assets/icon-x.svg";
import iconO from "../../../assets/icon-o.svg";

import * as gameUtils from "../../../utils/gameUtils";

const RoundSummary = ({ boardState }) => {
  const XWinObject = gameUtils.inspectForWins(boardState, "x");
  const OWinObject = gameUtils.inspectForWins(boardState, "o");
  return (
    <>
      <span>
        Player {XWinObject ? XWinObject.player : OWinObject.player} Wins
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
        <button>Quit</button>
        <button>Next Round</button>
      </div>
    </>
  );
};

export default RoundSummary;

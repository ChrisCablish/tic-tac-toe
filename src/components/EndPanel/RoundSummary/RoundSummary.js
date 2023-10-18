import iconX from "../../../assets/icon-x.svg";
import iconO from "../../../assets/icon-o.svg";

import * as gameUtils from "../../../utils/gameUtils";

const RoundSummary = () => {
  return (
    <>
      <span>You Won!</span>
      <div className="symbol-winner">
        <img
          // src=conditional here
          className="symbol"
        ></img>
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

import iconX from "../../../../assets/icon-x.svg";
import iconO from "../../../../assets/icon-o.svg";

const WinMessage = ({ boardState, XWinObject, OWinObject }) => {
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
    </>
  );
};

export default WinMessage;

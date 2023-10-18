import RoundSummary from "./RoundSummary/RoundSummary";

function EndPanel({ boardState, setBoardState }) {
  return (
    <div>
      <RoundSummary boardState={boardState} setBoardState={setBoardState} />
    </div>
  );
}

export default EndPanel;

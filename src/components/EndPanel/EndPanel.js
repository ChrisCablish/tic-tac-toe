import RoundSummary from "./RoundSummary/RoundSummary";

function EndPanel({
  boardState,
  setBoardState,
  gameState,
  setGameState,
  playerTurn,
  setPlayerTurn,
  turnCounter,
  setTurnCounter,
}) {
  return (
    <div>
      <RoundSummary
        boardState={boardState}
        setBoardState={setBoardState}
        gameState={gameState}
        setGameState={setGameState}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
        turnCounter={turnCounter}
        setTurnCounter={setTurnCounter}
      />
    </div>
  );
}

export default EndPanel;

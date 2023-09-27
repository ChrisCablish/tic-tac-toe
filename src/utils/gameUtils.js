// gameUtils.js

export const inspectForHorizontalWin = (boardState, symbol) => {
  return (
    boardState[0].every((square) => square && square.symbol === symbol) ||
    boardState[1].every((square) => square && square.symbol === symbol) ||
    boardState[2].every((square) => square && square.symbol === symbol)
  );
};

export const inspectForVerticalWin = (boardState, symbol) => {
  return (
    boardState.every((row) => row[0] && row[0].symbol === symbol) ||
    boardState.every((row) => row[1] && row[1].symbol === symbol) ||
    boardState.every((row) => row[2] && row[2].symbol === symbol)
  );
};

export const inspectForDiagonalDownWin = (boardState, symbol) => {
  return boardState[0][0] &&
    boardState[0][0].symbol === symbol &&
    boardState[1][1] &&
    boardState[1][1].symbol === symbol &&
    boardState[2][2] &&
    boardState[2][2].symbol === symbol
    ? true
    : false;
};

export const inspectForDiagonalUpWin = (boardState, symbol) => {
  return boardState[2][0] &&
    boardState[2][0].symbol === symbol &&
    boardState[1][1] &&
    boardState[1][1].symbol === symbol &&
    boardState[0][2] &&
    boardState[0][2].symbol === symbol
    ? true
    : false;
};

export const inspectForWins = (boardState, symbol) => {
  return (
    inspectForVerticalWin(boardState, symbol) ||
    inspectForHorizontalWin(boardState, symbol) ||
    inspectForDiagonalDownWin(boardState, symbol) ||
    inspectForDiagonalUpWin(boardState, symbol)
  );
};

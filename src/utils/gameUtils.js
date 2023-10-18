// gameUtils.js

const getPlayer = (boardState, symbol) => {
  let player;
  let found = false;

  for (let row of boardState) {
    for (let square of row) {
      if (square && square.symbol === symbol) {
        player = square.player;
        found = true;
      }
    }
    if (found) break;
  }
  return player;
};

export const inspectForHorizontalWin = (boardState, symbol) => {
  //returns either a winObject or null
  const win =
    boardState[0].every((square) => square && square.symbol === symbol) ||
    boardState[1].every((square) => square && square.symbol === symbol) ||
    boardState[2].every((square) => square && square.symbol === symbol);
  if (win) {
    const player = getPlayer(boardState, symbol);
    return { won: true, player: player, symbol: symbol };
  } else {
    return null;
  }
};

export const inspectForVerticalWin = (boardState, symbol) => {
  const win =
    boardState.every((row) => row[0] && row[0].symbol === symbol) ||
    boardState.every((row) => row[1] && row[1].symbol === symbol) ||
    boardState.every((row) => row[2] && row[2].symbol === symbol);
  if (win) {
    const player = getPlayer(boardState, symbol);
    return { won: true, player: player, symbol: symbol };
  } else {
    return null;
  }
};

export const inspectForDiagonalDownWin = (boardState, symbol) => {
  const win =
    boardState[0][0] &&
    boardState[0][0].symbol === symbol &&
    boardState[1][1] &&
    boardState[1][1].symbol === symbol &&
    boardState[2][2] &&
    boardState[2][2].symbol === symbol;

  if (win) {
    const player = getPlayer(boardState, symbol);
    return { won: true, player: player, symbol: symbol };
  } else {
    return null;
  }
};

export const inspectForDiagonalUpWin = (boardState, symbol) => {
  const win =
    boardState[2][0] &&
    boardState[2][0].symbol === symbol &&
    boardState[1][1] &&
    boardState[1][1].symbol === symbol &&
    boardState[0][2] &&
    boardState[0][2].symbol === symbol;

  if (win) {
    const player = getPlayer(boardState, symbol);
    return { won: true, player: player, symbol: symbol };
  } else {
    return null;
  }
};

export const inspectForWins = (boardState, symbol) => {
  //this function will return null until someone wins at which point it returns a winObject e.g. {won: true, player: 1}
  const vert = inspectForVerticalWin(boardState, symbol);
  const horiz = inspectForHorizontalWin(boardState, symbol);
  const diagDown = inspectForDiagonalDownWin(boardState, symbol);
  const diagUp = inspectForDiagonalUpWin(boardState, symbol);
  if (vert) {
    return vert;
  } else if (horiz) {
    return horiz;
  } else if (diagDown) {
    return diagDown;
  } else if (diagUp) {
    return diagUp;
  } else {
    return null;
  }
};

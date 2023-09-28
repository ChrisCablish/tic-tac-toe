// gameUtils.js

//instead of just returning true or false, I want these inspector functions to return boolean as well as which player won
//these two results can be returned in an object
// {
//   won: true,
//   player: 2
// }

// export const inspectForHorizontalWin = (boardState, symbol) => {
//   return (
//     boardState[0].every((square) => square && square.symbol === symbol) ||
//     boardState[1].every((square) => square && square.symbol === symbol) ||
//     boardState[2].every((square) => square && square.symbol === symbol)
//   );
// };

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
    return { won: true, player: player };
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
    return { won: true, player: player };
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
    return { won: true, player: player };
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
    return { won: true, player: player };
  } else {
    return null;
  }
};

// export const inspectForWins = (boardState, symbol) => {
//   return (
//     inspectForVerticalWin(boardState, symbol) ||
//     inspectForHorizontalWin(boardState, symbol) ||
//     inspectForDiagonalDownWin(boardState, symbol) ||
//     inspectForDiagonalUpWin(boardState, symbol)
//   );
// };

// export const findPlayerWinner = (boardState, symbol) {
//   const vert = inspectForVerticalWin(boardState, symbol);
//   const horiz = inspectForHorizontalWin(boardState, symbol);
//   const diagDown = inspectForDiagonalDownWin(boardState, symbol);
//   const diagUp = inspectForDiagonalUpWin(boardState, symbol);
// };

export const inspectForWins = (boardState, symbol) => {
  const vert = inspectForVerticalWin(boardState, symbol); //if there is a win, one of these will be an object instead of null
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

  //THIS FUNCTION WILL RETURN NULL ON EACH RE-RENDER UNTIL SOMEONE WINS - make sure you deal withthat gracefully

  //return an object {won: true, player: 1}
};

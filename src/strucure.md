App.js
|
|-MainPanel.js (either MenuPanel.js or GamePanel.js show at any one time)
| |
| |-MenuPanel.tsx
| |
| |-GamePanel.tsx
| |
| |-Header.js
| |
| |-Score.js
|
|-EndPanel.js (dislays over top of MainPanel.js once game is complete or restart is clicked )
| |
| |-TakesTheRound.js (if someone wins)
| |
| |-RoundTied.js (players tie)
| |
| |-RestartGame.js (player clicks restart button)
|

---States---
Two different game type states - againstCPU or againstPlayer
Two different symbolChoice states - X or O
turnState = playerOneTurn or playerTwoTurn or CpuTurn
Score States - playerOneScore and playerTwoScore or PlayerOneScore and CpuScore

---Functions---
checkIfWin() - run each time a move is made, check if 3 adjacent squares match (check if someone won)
resetGame() - clear all the squares

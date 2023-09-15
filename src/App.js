import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import React, { useState } from "react";
import symbolStructure from "./components/MainPanel/symbolStructure";

function App() {
  // const symbolStructureX = {
  //   X: "p1",
  //   O: "p2",
  // };

  // const symbolStructureO = {
  //   X: "p2",
  //   O: "p1",
  // };

  // const [playerSymbols, setPlayerSymbols] = useState(symbolStructureX);
  const [turn, setTurn] = useState(symbolStructure.playerOneIsX.X);
  return <MainPanel turn={turn} setTurn={setTurn} />;
}

export default App;

//if (x is selected) {
// turn
//}

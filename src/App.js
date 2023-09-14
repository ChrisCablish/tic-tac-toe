import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";
import React, { useState } from "react";

function App() {
  const [turn, setTurn] = useState("p1");
  return <MainPanel turn={turn} setTurn={setTurn} />;
}

export default App;

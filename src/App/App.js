import React from "react";
import "./App.scss";
import Ficha from "../components/Fichas/Ficha";
import Informacoes from "../components/Informacoes/Informacoes";

function App() {
  return (
    <div className="App">
      <Ficha />
      <Informacoes />
    </div>
  );
}

export default App;

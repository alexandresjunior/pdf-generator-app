import React from "react";
import logo from "./assets/img/treina_recife_logo.png";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Criando documentos PDF com React JS</p>
      </header>

      <section className="App-body">
        <button className="btn">Visualizar Documento</button>
      </section>
    </div>
  );
}

export default App;

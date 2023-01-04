import React from "react";
import logo from "./assets/img/treina_recife_logo.png";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { data, alunos } from "./mocks/data.js";
import { CertificadoLayoutPDF } from "./components/CertificadoLayoutPDF";
import { AtaTurmaLayoutPDF } from "./components/AtaTurmaLayoutPDF";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Criando documentos PDF com React JS</p>
      </header>

      <section className="App-body">
        <button className="btn" onClick={() => visualizarImpressao(alunos)}>Visualizar Documento</button>
      </section>
    </div>
  );
}

const visualizarImpressao = (data) => {
  // const documento = CertificadoLayoutPDF("gabriela cavalcanti de souza", "lógica de programação com python", "36")
  const documento = AtaTurmaLayoutPDF(data);

  pdfMake.createPdf(documento).open({}, window.open('', '_blank'))
}

export default App;

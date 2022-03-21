import React, { useState } from "react";
import Pagina1 from "./Pagina1.js";
import "../style.css";

export default function Home() {
  // Declarar uma nova variável de state, na qual chamaremos de "Pagina"
  const [pagina, setPagina] = useState("Home");
 
  if (pagina === "Pagina1") {
    return (
      <>
        <Pagina1 backPage={pagina} callback={setPagina}/>
      </>
    );
  } 
  if(pagina ==="Home"){
    return (
      <section className="tela1">
        <figure></figure>
        <h1>ZapRecall</h1>
        <button className="botaoIniciar" onClick={() => setPagina("Pagina1")}>
          Clique aqui{" "}
        </button>
      </section>
    );
  }
}

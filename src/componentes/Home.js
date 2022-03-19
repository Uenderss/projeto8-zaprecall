import React, { useState } from "react";
import Pagina1 from "./Pagina1.js";
import "../style.css";

export default function Home() {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState("Home");

  if (count === "Pagina1") {
    return (
      <>
        <Pagina1 />
      </>
    );
  } else {
    return (
      <section className="tela1">
        <figure></figure>
        <h1>ZapRecall</h1>
        <button className="botaoIniciar" onClick={() => setCount("Pagina1")}>
          Clique aqui{" "}
        </button>
      </section>
    );
  }
}

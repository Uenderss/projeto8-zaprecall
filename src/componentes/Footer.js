import React from "react";
import sad from "../assets/sad.png";
import party from "../assets/party.png";
import {AiFillQuestionCircle, AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';


export default function Footer(props) {
  let imgSaudacao, saudacao, texto;
  const lista = [...props.item];
  

  if (lista.length === 8 && lista.indexOf("errou") >=0) {
    imgSaudacao = sad;
    saudacao = "Putz";
    texto = `Ainda faltam alguns...
             Mas não desamime`;
             console.log("errado"+lista.indexOf("errou"))
  }
  if (lista.length === 8 && lista.indexOf("errou")<0) {
    imgSaudacao = party;
    saudacao = "Parabéns";
    texto = `Você não esqueceu de
           nenhum flashcard!`;
  }
  
  function verificarIcone(icone) {
    if (icone === "zap") {
      
      return <AiFillCheckCircle className="icon-zap" />;
    }
    if (icone === "quase") {
      return <AiFillQuestionCircle className="icon-quase"/>;
    }
    if (icone === "errou") {
      
      return <AiFillCloseCircle className="icon-errou"/>;
    }
  }

    return (
      <footer>
        <div className="status">
          <img src={imgSaudacao} alt="" />
          <strong>{saudacao}</strong>
        </div>
        <div className="resultado">
          <span>{texto}</span>
        </div>
        <h4>
          {props.item.length}/{props.total} CONCLUÍDOS <br />
          {lista.map((item,index) => (
            verificarIcone(item)
          ))}
        </h4>
        {lista.length===8 ? <div className="reiniciar" onClick={()=>props.callback("Home")}>REINICIAR RECALL</div>:<></>}
      </footer>
    );
    
}

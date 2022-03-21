import React, { useState } from "react";
import {AiFillQuestionCircle, AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';
import {FiPlay} from 'react-icons/fi';

export default function Pergunta(props) {
  const { pergunta, resposta } = props.questao;
  const {respostas,callback} =props;

  const [aberto, setAberto] = useState(false);
  const [mostrandoResposta, setMostrandoResposta] = useState(false);
  const [solucao, setSolucao] = useState(null);
  const [bloquear,setBloqueio]=useState(false);

  
  let classDesk = "pergunta";


  if (aberto) {
    classDesk += " aberta";
  }
  
 

  function toogleDesk() {
    setAberto(true);
  }

  function mostrarResposta() {
    setMostrandoResposta(true);
  }

  let iconeDaResposta=<FiPlay/>; 
  if(solucao){
    classDesk += ` ${solucao}`;
    if (solucao === "zap") {
    
      iconeDaResposta = <AiFillCheckCircle className="icon-zap" />;
    }
    if (solucao === "quase") {
      iconeDaResposta = <AiFillQuestionCircle className="icon-quase"/>;
    }
    if (solucao === "errou") {
      
      iconeDaResposta = <AiFillCloseCircle className="icon-errou"/>;
    }
  }
  


  
  function fecharCard(event, solucaoFinal){
    event.stopPropagation();
    setAberto(false);
    setMostrandoResposta(false);
    setSolucao(solucaoFinal);
    setBloqueio(!bloquear);
    callback([...respostas, solucaoFinal])    
  }



  return (
    <>
    <button onClick={toogleDesk} className={classDesk} disabled={bloquear}>
      {!aberto && (
        <div className="texto">
          <span> {`Pergunta ${props.index + 1}`}</span>
          <figure>{iconeDaResposta}</figure>
        </div>
      )}

      {aberto && !mostrandoResposta && (
        <div className="deck">
          <div className="texto">{pergunta}</div>
          <div className="virar" onClick={mostrarResposta}>
            <svg
              width="30"
              height="20"
              viewBox="0 0 20 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.5 0 0 2.2 0 5C0 7.2 2.9 9.1 7 9.8V13L11 9L7 5V7.7C3.8 7.1 2 5.8 2 5C2 3.9 5 2 10 2C15 2 18 3.9 18 5C18 5.7 16.5 6.9 14 7.5V9.6C17.5 8.8 20 7.1 20 5C20 2.2 15.5 0 10 0Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      )}

      { aberto && mostrandoResposta &&(
          <div className="deck">
              <div className="texto">{resposta}</div>
              <div className="botoes">
              <div className="botao red" onClick={(event) => fecharCard(event, 'errou')}>Não Lembrei</div>
              <div className="botao orange" onClick={(event) => fecharCard(event, 'quase')}>Quase não Lembrei</div>
              <div className="botao green" onClick={(event) => fecharCard(event, 'zap')}>Zap!</div>
              </div>
        </div>
      )}

    </button>

    </>
  );
}

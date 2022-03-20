import React from "react";
import zap from '../assets/zap.png';
import quase from '../assets/quase.png';
import errou from '../assets/errou.png';
import sad from '../assets/sad.png';
import party from '../assets/party.png'



export default function Footer(props) {
  
  let lista=[...props.item];
  
  
  function verificarIcone(icone){
    if(icone === 'zap'){
      return zap;
    }
    if(icone === 'quase'){
      return quase;
    }
    if(icone==='errou'){
      return errou;
    }

  }

  let imgSaudacao, saudacao, texto;

  if(lista.length === 8 && lista.indexOf('errou')){
      imgSaudacao =sad;
      saudacao="Putz";
      texto=`Ainda faltam alguns...
             Mas não desamime`;
  }
  if(lista.length === 8 && !lista.indexOf('errou')){
    imgSaudacao =party;
    saudacao="Parabéns";
    texto=`Você não esqueceu de
           nenhum flashcard!`;
}

  return (
    <footer>
        <div className="status"><img src={imgSaudacao} alt="" /><strong>{saudacao}</strong></div>
        <div className="resultado"><span>{texto}</span></div>
        <h4>
          {props.item.length}/{props.total} CONCLUÍDOS <br/>
          {
            lista.map((item)=><img src={verificarIcone(item)} alt={item}/>        
          )}
        </h4>

    </footer>
  );
}
import React from "react";
import zap from '../assets/zap.png';
import quase from '../assets/quase.png';
import errou from '../assets/errou.png';


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
 
  return (
    <footer>
        <h4>
          {props.item.length}/{props.total} CONCLUÍDOS <br/>
          {
            lista.map((item)=><img src={verificarIcone(item)} alt={item}/>
                   
          )}
        </h4>

    </footer>
  );
}
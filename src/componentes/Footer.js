import React from "react";
// import { useState } from "react";

export default function Footer(props){
    // const [qtdRespostas,setQtdRespostas]=useState(0);
  

    return(
        <footer>
            <h4>{props.item -1}/{props.total} CONCLUÍDOS <br />{props.icones}</h4>
        </footer>
    )
}
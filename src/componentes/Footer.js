import React from "react";
// import { useState } from "react";

export default function Footer(props){
    // const [qtdRespostas,setQtdRespostas]=useState(0);
    console.log(props);
    return(
        <footer>
            <h4>{props.contador}/{props.total} CONCLUÍDOS <br />{props.icones}</h4>
        </footer>
    )
}
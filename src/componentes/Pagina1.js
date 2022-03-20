import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Pergunta from "./Pergunta.js";
import { useState } from "react";

const decks = [
    {pergunta:"O que é JSX?",resposta:"Uma extensão de linguagem do JavaScript"},
    {pergunta:"O React é __",resposta:"uma biblioteca JavaScript para construção de interfaces"},
    {pergunta:"Componentes devem iniciar com __",resposta:"letra maiúscula"},
    {pergunta:"Podemos colocar __ dentro do JSX",resposta:"expressões"},
    {pergunta:"O ReactDOM nos ajuda __",resposta:"interagindo com a DOM para colocar componentes React na mesma"},
    {pergunta:"Usamos o npm para __",resposta:"gerenciar os pacotes necessários e suas dependências"},
    {pergunta:"Usamos props para __",resposta:"passar diferentes informações para componentes"},
    {pergunta:"Usamos estado (state) para __",resposta:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
]
export default function Pagina1(){
    const[respostas, setRespostas] = useState([]);


    return(
        <>
            <Header/>
            <main className="perguntas">
                {
                decks.sort().map(
                    (decks,index)=><Pergunta key={index} questao={decks} index={index} 
                    respostas={respostas}
                    callback={setRespostas}/>
                )
            }
            </main>
            <Footer item={respostas} total={decks.length}/>
        </>
        
    );
}
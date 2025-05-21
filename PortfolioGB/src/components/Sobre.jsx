import React from 'react'
import "../index.css"

function Sobre() {
  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
    <div className="aboutMe">
        <div className="left">
            <div className="picture">
             <img src={"/static/images/IMG_9908.JPG"} width={250}/>
            </div>
        </div> 

        <div className="right">
        <p style={{color: 'white', fontFamily: 'roboto Mono', fontSize: '11pt'}}>
              Olá, prazer! Eu sou o Gabriel, Eu venho atuando na área audiovisual há 4 anos, e nesse caminho
              descobri os retratos como uma especialidade. Tenho 25 anos de
              idade e venho de Porto Alegre, RS. <br />
              Trabalhar com diferentes tipos de cores e ser criativo em todos os
              aspectos, desde a cena principal até os pequenos detalhes, tem
              sido o maior foco dos últimos trabalhos. <br />
              Através da criatividade, venho trazendo um pouco da minha
              personalidade, fazendo uma conexão entre as histórias que conto.
            </p>
        </div>
    </div>
  </div>
  )
}

export default Sobre
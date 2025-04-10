import React from 'react'
import "../index.css"

function Sobre() {
  return (
    <div className="aboutMe">
        <div className="left">
            <div className="picture" style={{position: 'relative', left: '65%', top: '50px'}}>
             <img src={"/static/images/IMG_9908.JPG"} width={250}/>
            </div>
        </div>

        <div className="right" style={{width: '40%', position: 'absolute', right: '11%', top: '30%'}}>
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
  )
}

export default Sobre
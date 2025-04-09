import React from 'react'

function Retratos() {
  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.9)', height: '85vh', display: 'flex', gap: '3%', alignItems: 'center', justifyContent: 'center', fontFamily: 'orbitron', color: 'white'}}>
        <div className="retrato">
            <figure>
                <a href="retratopage">
                <img src="src\assets\images\IMG_9108.jpg" srcset="imagem retrato" width={280}/>
                </a>
                    <figcaption style={{textAlign: 'center', marginTop: '10px'}}>RETRATOS</figcaption>
            </figure>
        </div>
        <div className="lifestyle">
            <figure>
                <a href="lifestylepage">
                    <img src="src\assets\images\IMG_7278.jpg" srcset="imagem lifestyle" width={280}/>
                </a>
                    <figcaption style={{textAlign: 'center',  marginTop: '10px'}}>LIFESTYLE</figcaption>
            </figure>
        </div>
    </div>
  )
}

export default Retratos
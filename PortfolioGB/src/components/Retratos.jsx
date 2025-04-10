import React from 'react'
import "../index.css"

function Retratos() {
  return (
    <div className='retPhoto'>
        <div className="retrato">
            <figure>
                <a href="retratopage">
                <img src={"/static/images/IMG_9108.jpg"} width={280}/>
                </a>
                    <figcaption style={{textAlign: 'center', marginTop: '10px'}}>RETRATOS</figcaption>
            </figure>
        </div>
        <div className="lifestyle">
            <figure>
                <a href="lifestylepage">
                    <img src={"/static/images/IMG_7278.jpg"} width={280}/>
                </a>
                    <figcaption style={{textAlign: 'center',  marginTop: '10px'}}>LIFESTYLE</figcaption>
            </figure>
        </div>
    </div>
  )
}

export default Retratos
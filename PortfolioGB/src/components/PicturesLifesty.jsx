import React from 'react'
import "../index.css"

function PicturesLifesty() {
  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
    <div className="picturesSty">
        <div className="picture">
            <img src={"/static/images/IMG_7278.jpg"} alt="picture1" width={300}/>
        </div>
        <div className="picture">
            <img src={"/static/images/IMG_7275.jpg"} alt="picture2" width={300}/>
        </div>
        <div className="picture">
            <img src={"/static/images/IMG_7303.jpg"} alt="picture3" width={300}/>
        </div>
        <div className="picture">
            <img src={"/static/images/IMG_7267.jpg"} alt="picture4" width={300}/>
        </div>
        <div className="picture">
            <img src={"/static/images/IMG_7289.jpg"} alt="picture5" width={300}/>
        </div>
        <div className="picture">
            <img src={"/static/images/IMG_7292.jpg"} alt="picture6" width={300}/>
        </div>
    </div>
    <div className="logoWhats">
        <a href="https://api.whatsapp.com/send?phone=5551997071097&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20pacotes%20de%20servi%C3%A7os.">
            <img src={"/static/images/10000485-removebg-preview.png"} alt='Logo Whatsapp' width={50}/>
        </a>
    </div>
</div>
  )
}

export default PicturesLifesty
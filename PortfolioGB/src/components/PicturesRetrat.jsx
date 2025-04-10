import React from 'react'
import '../index.css'

function PicturesRetrat() {
  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <div className="pictures">
            <div className="picture">
                <img src={"/static/images/IMG_7491.jpg"} alt="picture1" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_8887.jpg"} alt="picture2" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_8815.jpg"} alt="picture3" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_9183.jpg"} alt="picture4" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_2576.JPG"} alt="picture5" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_7398.jpg"} alt="picture6" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_7400.jpg"} alt="picture7" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_8764.jpg"} alt="picture8" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_9023.jpg"} alt="picture9" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_9020.jpg"} alt="picture10" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_7498.jpg"} alt="picture11" width={300}/>
            </div>
            <div className="picture">
                <img src={"/static/images/IMG_9053.jpg"} alt="picture12" width={300}/>
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

export default PicturesRetrat
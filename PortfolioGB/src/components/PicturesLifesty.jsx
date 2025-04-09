import React from 'react'

function PicturesLifesty() {
  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
    <div className="pictures" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', textAlign: 'center'}}>
        <div className="picture">
            <img src="src\assets\images\IMG_7278.jpg" alt="picture1" width={300}/>
        </div>
        <div className="picture">
            <img src="src\assets\images\IMG_7275.jpg" alt="picture2" width={300}/>
        </div>
        <div className="picture">
            <img src="src\assets\images\IMG_7303.jpg" alt="picture3" width={300}/>
        </div>
        <div className="picture">
            <img src="src\assets\images\IMG_7267.jpg" alt="picture4" width={300}/>
        </div>
        <div className="picture">
            <img src="src\assets\images\IMG_7289.jpg" alt="picture5" width={300}/>
        </div>
        <div className="picture">
            <img src="src\assets\images\IMG_7292.jpg" alt="picture6" width={300}/>
        </div>
    </div>
    <div className="logoWhats" style={{position: 'sticky', bottom: '2%', marginLeft: '90%'}}>
        <a href="https://api.whatsapp.com/send?phone=5551997071097&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20seus%20pacotes%20de%20servi%C3%A7os.">
            <img src="src\assets\images\OIP__11_-removebg-preview.png" alt="Logo whatsapp" width={100}/>
        </a>
    </div>
</div>
  )
}

export default PicturesLifesty
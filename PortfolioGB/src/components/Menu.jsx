import React from 'react'
import "../index.css"

function Menu() {
  return (
    <div style={{backgroundColor: 'black', display: 'flex', justifyContent: 'space-around', position:'relative', top:'0', width:'100%'}}>
      <h3 style={{padding: '20px 0', color: 'white', fontFamily: 'oswald'}}>GABRIEL CORRÊA</h3>
      <ul class="nav nav-tabs align-items-center">
  <li class="nav-item" style={{fontFamily: 'orbitron'}}>
    <a class="nav-link text-white" href="sobremim">SOBRE MIM</a>
  </li>
  <li class="nav-item" style={{fontFamily: 'orbitron'}}>
    <a class="nav-link text-white" href="/">PORTFÓLIO</a>
  </li>
  <li class="nav-item" style={{fontFamily: 'orbitron'}}>
<button type="button" class="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
  CONTATO
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">CONTATOS</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <ul style={{listStyle: 'none'}}>
          <li><img src="\src\assets\images\e-mail-symbol-email-icon-flat-graphic-illustration-isolated-vector-removebg-preview.png" width={27}/> contato.correafotos@gmail.com</li>
          <li><img src="\src\assets\images\OIP__13_-removebg-preview.png" width={25}/>  @gabrielcorreafoto</li>
          <li><img src={"/static/images/10000485-removebg-preview.png"} width={30} /> (51) 9 9707-1097</li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
  </li>
</ul>
    </div>
  )
}

export default Menu
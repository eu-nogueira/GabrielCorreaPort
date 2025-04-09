import React from 'react'

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
    <a class="nav-link text-white" href="#">CONTATO</a>
  </li>
</ul>
    </div>
  )
}

export default Menu
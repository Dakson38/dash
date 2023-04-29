import React from 'react'
import './styles/content.css'

import imgUser from '../assets/icons/user.png'
import ContentCursoEvento from './ContentCursoEvento'
import ContentUsuario from './ContentUsuario'

function Content ({ubicacionDash, iconoDash, data})  {
  return (
    <div className='content'>
      <div className='nav-user'>
        <img src={imgUser} alt="" className='nav-user-img'/>
        <div>
            <b>Lucia Gutierrez</b>
            <p>Administrador</p>
        </div>
      </div>
      <p className='parrafo-panel'>
        Panel Administrativo <b>&gt; {ubicacionDash}</b>
      </p>
      {ubicacionDash === 'Cursos' || ubicacionDash === 'Eventos'? <ContentCursoEvento ubicacionDash={ubicacionDash} iconoDash={iconoDash} data={data}></ContentCursoEvento> : '' }
      {ubicacionDash === 'Usuarios' ?  <ContentUsuario ubicacionDash={ubicacionDash} iconoDash={iconoDash} data={data}></ContentUsuario> :''}
    </div>
  )
}

export default Content
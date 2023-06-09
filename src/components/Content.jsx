import React from 'react'
import './styles/content.css'

import imgUser from '../assets/icons/user.png'
import ContentCursoEvento from './ContentCursoEvento'
import ContentUsuario from './ContentUsuario'
import ContentNormativa from './ContentNormativa'
import ContentMunicipio from './ContentMunicipio'

function Content ({ubicacionDash, iconoDash, data})  {
  return (
    <div className='content'>

      {/**Navbar donde se muestra la informacion del usuario */}
      <div className='nav-user'>
        <img src={imgUser} alt="" className='nav-user-img'/>
        <div>
            <b>Lucia Gutierrez</b>
            <p>Administrador</p>
        </div>
      </div>

      {/**Informacion de donde se encuantra el usuario, cursos, eventos, normativa o municipio */}
      <p className='parrafo-panel'>
        Panel Administrativo <b>&gt; {ubicacionDash}</b>
      </p>

      {/**Segun la opcion del sidebar nos cargara el contenido de una seccion */}
      {ubicacionDash === 'Cursos' || ubicacionDash === 'Eventos'? <ContentCursoEvento ubicacionDash={ubicacionDash} iconoDash={iconoDash} data={data}></ContentCursoEvento> : '' }
      {ubicacionDash === 'Usuarios' ?  <ContentUsuario ubicacionDash={ubicacionDash} iconoDash={iconoDash} data={data}></ContentUsuario> :''}
      {ubicacionDash === 'Normativas' ? <ContentNormativa ubicacionDash={ubicacionDash} iconoDash={iconoDash} data={data}></ContentNormativa> : ''}
      {ubicacionDash === 'Municipios' ? <ContentMunicipio ubicacionDash={ubicacionDash} iconoDash={iconoDash} data={data}></ContentMunicipio>:''}

    </div>
  )
}

export default Content
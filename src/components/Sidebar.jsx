import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/sidebar.css'

import sedalp from '../assets/images/sedalp.png'
import iconCursos from '../assets/icons/cursos.svg'
import iconEventos from '../assets/icons/eventos.svg'
import iconMunicipios from '../assets/icons/municipios.svg'
import iconNormativas from '../assets/icons/normativas.svg'
import iconUsuarios from '../assets/icons/usuarios.svg'
import iconSalir from '../assets/icons/salir.svg'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <img src={sedalp} alt="" className='img-sedalp'/>
        <ul className='navside'>
            <li className='navside-li'>
                <div className='navside-li-img'><img src={iconCursos} alt=""/></div>
                <NavLink className="navside-li-a" to="/cursos">CURSOS</NavLink>
            </li>
            <li className='navside-li'>
                <div className='navside-li-img'><img src={iconEventos} alt=""/></div>
                <NavLink className="navside-li-a" to="/eventos">EVENTOS</NavLink>
            </li>
            <li className='navside-li'>
                <div className='navside-li-img'><img src={iconNormativas} alt=""/></div>
                <NavLink className="navside-li-a" to="/normativas">NORMATIVAS</NavLink>
            </li>
            <li className='navside-li'>
                <div className='navside-li-img'><img src={iconMunicipios} alt=""/></div>
                <NavLink className="navside-li-a" to="/municipios">MUNICIPIOS</NavLink>
            </li>
            <li className='navside-li'> 
                <div className='navside-li-img'><img src={iconUsuarios} alt=""/></div>
                <NavLink className="navside-li-a" to="/usuarios">USUARIOS</NavLink>
            </li>
        </ul>
            <ul className='navside-logout'>             
                <li className='navside-li'>
                    <div className='navside-li-img'><img src={iconSalir} alt=""/></div>
                    <NavLink className="navside-li-a" to="/salir">SALIR</NavLink>
                </li>
            </ul>
    </aside>
  )
}

export default Sidebar


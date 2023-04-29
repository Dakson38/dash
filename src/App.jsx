import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

import iconoCurso from './assets/icons/cursos.svg'
import iconoEvento from './assets/icons/eventos.svg'
import iconoNormativa from './assets/icons/normativas.svg'
import iconoMunicipio from './assets/icons/municipios.svg'
import iconoUsuario from './assets/icons/usuarios.svg'

function App() {
  const [count, setCount] = useState(0)

  const informacion = [
    {
        id: 1,
        titulo: 'Introducción al Servidor Público',
        parrafo: 'La figura del servidor público es esencial en cualquier administración...'
    },
    {
        id: 2,
        titulo: 'Introducción al Servidor Público',
        parrafo: 'La figura del servidor público es esencial en cualquier administración...'
    },
    {
        id: 3,
        titulo: 'Introducción al Servidor Público',
        parrafo: 'La figura del servidor público es esencial en cualquier administración...'
    },
    {
        id: 4,
        titulo: 'Introducción al Servidor Público',
        parrafo: 'La figura del servidor público es esencial en cualquier administración...'
    },
    {
        id: 5,
        titulo: 'Introducción al Servidor Público',
        parrafo: 'La figura del servidor público es esencial en cualquier administración...'
    },
    {
        id: 6,
        titulo: 'Introducción al Servidor Público',
        parrafo: 'La figura del servidor público es esencial en cualquier administración...'
    },
]

const infoUsu = [
  {
    id:1,
    telefono: 78998832,
    usuario: 'pedro1',
    nomApe: 'Pedro Gonzales Perz del Prado Valencia',
    estado: 'Habilitado'
  },
  {
    id:2,
    telefono: 78998832,
    usuario: 'ss',
    nomApe: 'Pedro Gonzales',
    estado: 'Habilitado'
  },
  {
    id:3,
    telefono: 78998832,
    usuario: 'pedro1',
    nomApe: 'Pedro Gonzales',
    estado: 'Habilitado'
  },
  {
    id:4,
    telefono: 78998832,
    usuario: 'pedro1',
    nomApe: 'Pedro Gonzales',
    estado: 'Habilitado'
  },
  {
    id:5,
    telefono: 78998832,
    usuario: 'pedro1',
    nomApe: 'Pedro Gonzales',
    estado: 'Habilitado'
  },
  {
    id:6,
    telefono: 78998832,
    usuario: 'pedro1',
    nomApe: 'Pedro Gonzales',
    estado: 'Habilitado'
  },
  {
    id:7,
    telefono: 78998832,
    usuario: 'pedro1',
    nomApe: 'Pedro Gonzales',
    estado: 'Habilitado'
  },
  {
    id:8,
    telefono: 78998832,
    usuario: 'pedro1',
    nomApe: 'Pedro Gonzales',
    estado: 'Habilitado'
  },
]

  return (
    <>
            <Sidebar />
            <Routes>
                <Route path='/cursos' element={ <Content ubicacionDash={'Cursos'} iconoDash={iconoCurso} columna={'Párrafo'} data={informacion}></Content> } />
                <Route path='/eventos' element={ <Content ubicacionDash={'Eventos'} iconoDash={iconoEvento} columna={'Resumen'} data={informacion}></Content> } />
                <Route path='/normativas' element={  <div></div> } />
                <Route path='/municipios' element={  <div></div> } />
                <Route path='/usuarios' element={ <Content ubicacionDash={'Usuarios'} iconoDash={iconoUsuario} data={infoUsu}></Content> } />
                <Route path='/salir' element={ <div></div> } />
            </Routes>
    </>
  )
}

export default App

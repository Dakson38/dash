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
      id: 1,
      telefono: 78998832,
      usuario: 'pedro1',
      nomApe: 'Pedro Gonzales Perz del Prado Valencia',
      estado: 'Habilitado'
    },
    {
      id: 2,
      telefono: 78998832,
      usuario: 'ss',
      nomApe: 'Pedro Gonzales',
      estado: 'Habilitado'
    },
    {
      id: 3,
      telefono: 78998832,
      usuario: 'pedro1',
      nomApe: 'Pedro Gonzales',
      estado: 'Habilitado'
    },
    {
      id: 4,
      telefono: 78998832,
      usuario: 'pedro1',
      nomApe: 'Pedro Gonzales',
      estado: 'Habilitado'
    },
    {
      id: 5,
      telefono: 78998832,
      usuario: 'pedro1',
      nomApe: 'Pedro Gonzales',
      estado: 'Habilitado'
    },
    {
      id: 6,
      telefono: 78998832,
      usuario: 'pedro1',
      nomApe: 'Pedro Gonzales',
      estado: 'Habilitado'
    },
    {
      id: 7,
      telefono: 78998832,
      usuario: 'pedro1',
      nomApe: 'Pedro Gonzales',
      estado: 'Habilitado'
    },
    {
      id: 8,
      telefono: 78998832,
      usuario: 'pedro1',
      nomApe: 'Pedro Gonzales',
      estado: 'Habilitado'
    },
  ]

  const infoNorma = [
    // {
    //   id: 1,
    //   titulo: 'Marco Normativo General de la Autonomía',
    //   archivos: [{
    //     id: 1,
    //     subtitle: 'Constitucion Politica del Estado',
    //     nombreArchivo: 'Constitucion Política del Estado.pdf'
    //   },
    //   {
    //     id: 2,
    //     subtitle: 'Ley  N° 482 DE GOBIERNOS AUTÓNOMOS MUNICIPALES',
    //     nombreArchivo: 'Ley  N° 482 DE GOBIERNOS AUTÓNOMOS MUNICIPALES.pdf'
    //   },
    //   {
    //     id: 3,
    //     subtitle: 'Ley 018  DEL ÓRGANO ELECTORAL PLURINACIONAL',
    //     nombreArchivo: 'Ley 018  DEL ÓRGANO ELECTORAL PLURINACIONAL.pdf'
    //   },
    //   {
    //     id: 4,
    //     subtitle: 'Ley 073  DE DESLINDE JURISDICCIONAL',
    //     nombreArchivo: 'Ley 073  DE DESLINDE JURISDICCIONAL.pdf'
    //   }
    //   ]
    // },
    {
      id:1,
      titulo: 'Marco Normativo General de la Autonomía',
      archivos:[]
    },
    {
      id:2,
      titulo: 'Estatutos departamentales ',
      archivos: []
    },
    {
      id:3,
      titulo: 'Cartas Orgánicas  Municipales',
      archivos: []
    },
    {
      id:4,
      titulo: 'Estatutos Autonómicos Indígena Originario Campesino',
      archivos: []
    },
    {
      id:5,
      titulo: 'Estatuto Autonomico Regional',
      archivos: []
    },
  ]

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/cursos' element={<Content ubicacionDash={'Cursos'} iconoDash={iconoCurso} data={informacion}></Content>} />
        <Route path='/eventos' element={<Content ubicacionDash={'Eventos'} iconoDash={iconoEvento} data={informacion}></Content>} />
        <Route path='/normativas' element={<Content ubicacionDash={'Normativas'} iconoDash={iconoNormativa} data={infoNorma}></Content>} />
        <Route path='/municipios' element={<div></div>} />
        <Route path='/usuarios' element={<Content ubicacionDash={'Usuarios'} iconoDash={iconoUsuario} data={infoUsu}></Content>} />
        <Route path='/salir' element={<div></div>} />
      </Routes>
    </>
  )
}

export default App

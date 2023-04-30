import React from 'react'

import iconAyuda from '../assets/icons/help.svg'
import iconVer from '../assets/icons/ver.svg'
import iconEliminar from '../assets/icons/eliminar.svg'
import iconEdit from '../assets/icons/editar.svg'
import iconPdf from '../assets/icons/pdf.svg'
import './styles/contentNormativa.css'


function ContentNormativa({ ubicacionDash, iconoDash, dataNormativa }) {

  const listaGrupos = [
    {
      nro: 1,
      titulo: 'Marco normativo general de autonomìa'
    },
    {
      nro: 2,
      titulo: 'Estatutos departamentales'
    },
    {
      nro: 3,
      titulo: 'Cartas Orgánicas  Municipales'
    },
    {
      nro: 4,
      titulo: 'Estatutos Autonómicos Indígena Originario Campesino'
    },
    {
      nro: 5,
      titulo: 'Estatuto Autonomico Regional'
    },
    
  ]

  return (
    <div className='main-content-normativa'>
      <div className='content-normativa'>
        <div className='titulo-ayuda'>
          <h2 className='titulo-ayuda-h2'>{ubicacionDash}</h2>
          <button className='titulo-ayuda-button'><img src={iconAyuda} alt="" className='titulo-ayuda-button-img' /></button>
        </div>
        <div>
          <button className='boton-agregar-button'><img src={iconoDash} alt="" />Añadir {ubicacionDash}</button>
        </div>
        <table className='table-content'>
          <thead className='table-encabezado'>
            <tr>
              <td className='columna-nro'>N°</td>
              <td className='table-normativa-titulo'>Título</td>
              <td></td>
            </tr>
          </thead>
          <tbody className='table-cuerpo'>
            {
              listaGrupos.map(objGrupo => (
                <tr key={objGrupo.nro}>
                  <td className='table-cuerpo-nro'>{objGrupo.nro}</td>
                  <td>{objGrupo.titulo}</td>
                  <td className='botones-edit-eliminar'>
                    <button className='botones-edit-eliminar-button'><img src={iconVer} alt="" /></button>
                    <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

      <ContentNormativaDerivado dataNormativa={dataNormativa} iconoDash={iconoDash}></ContentNormativaDerivado>

    </div>
  )
}

export default ContentNormativa

export function ContentNormativaDerivado({ dataNormativa, iconoDash }) {

  const listaGpNormativa = [
    {
      nro: 1,
      subtitle: 'CONSTITUCION POLITICA DEL ESTADO'
    },
    {
      nro: 2,
      subtitle: 'Ley  N° 482 DE GOBIERNOS AUTÓNOMOS'
    },
    {
      nro: 3,
      subtitle: 'Ley 018  DEL ÓRGANO ELECTORAL PLURINACIONAL'
    },
    {
      nro: 4,
      subtitle: 'Ley 073  DE DESLINDE JURISDICCIONAL'
    },
  ]

  return (
    <div className='content-normativa-derivado'>
      <div className='titulo-ayuda'>
        <h2 className='titulo-ayuda-h2'>Marco normativo general de autonomía</h2>
        <button className='titulo-ayuda-button'><img src={iconAyuda} alt="" className='titulo-ayuda-button-img' /></button>
      </div>
      <div>
        <button className='boton-agregar-button'><img src={iconoDash} alt="" />Añadir Documento</button>
      </div>
      <table className='table-content'>
        <thead className='table-encabezado'>
          <tr className='table-content-tr'>
            <td className='columna-nro'>N°</td>
            <td className='table-normativa-derivado-titulo'>Título</td>
            <td>Archivo</td>
            <td></td>
          </tr>
        </thead>
        <tbody className='table-cuerpo'>
          {
            listaGpNormativa.map(objGpNormativa => (
              <tr key={objGpNormativa.nro}>
                <td className='table-cuerpo-nro'>{objGpNormativa.nro}</td>
                <td className='table-td'>{objGpNormativa.subtitle}</td>
                <td><img src={iconPdf} alt="" /></td>
                <td className='botones-edit-eliminar'>
                  <button className='botones-edit-eliminar-button'><img src={iconEdit} alt="" /></button>
                  <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

import React from 'react'

import iconAyuda from '../assets/icons/help.svg'
import iconVer from '../assets/icons/ver.svg'
import iconEliminar from '../assets/icons/eliminar.svg'
import iconEdit from '../assets/icons/editar.svg'
import iconPdf from '../assets/icons/pdf.svg'
import './styles/contentNormativa.css'


function ContentNormativa({ ubicacionDash, iconoDash, dataNormativa }) {
  
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
          <tbody>

                  <tr >
                    <td className='table-cuerpo-nro'>1</td>
                    <td>Marco normativo general de autonomìa</td>
                    <td className='botones-edit-eliminar'>
                      <button className='botones-edit-eliminar-button'><img src={iconVer} alt="" /></button>
                      <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                    </td>
                  </tr>
                  <tr >
                    <td className='table-cuerpo-nro'>2</td>
                    <td>Estatutos departamentales</td>
                    <td className='botones-edit-eliminar'>
                      <button className='botones-edit-eliminar-button'><img src={iconVer} alt="" /></button>
                      <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                    </td>
                  </tr>
                  <tr >
                    <td className='table-cuerpo-nro'>3</td>
                    <td>Cartas Orgánicas  Municipales</td>
                    <td className='botones-edit-eliminar'>
                      <button className='botones-edit-eliminar-button'><img src={iconVer} alt="" /></button>
                      <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                    </td>
                  </tr>
                  <tr >
                    <td className='table-cuerpo-nro'>4</td>
                    <td>Estatutos Autonómicos Indígena Originario Campesino</td>
                    <td className='botones-edit-eliminar'>
                      <button className='botones-edit-eliminar-button'><img src={iconVer} alt="" /></button>
                      <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                    </td>
                  </tr>
                  <tr >
                    <td className='table-cuerpo-nro'>5</td>
                    <td>Estatuto Autonomico Regional</td>
                    <td className='botones-edit-eliminar'>
                      <button className='botones-edit-eliminar-button'><img src={iconVer} alt="" /></button>
                      <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                    </td>
                  </tr>

          </tbody>
        </table>
      </div>

      <ContentNormativaDerivado dataNormativa={dataNormativa} iconoDash={iconoDash}></ContentNormativaDerivado>

    </div>
  )
}

export default ContentNormativa

export function ContentNormativaDerivado({dataNormativa, iconoDash}) {
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
        <tbody>

                <tr>
                  <td className='table-cuerpo-nro'>1</td>
                  <td className='table-td'>CONSTITUCION POLITICA DEL ESTADO</td>
                  <td><img src={iconPdf} alt="" /></td>
                  <td className='botones-edit-eliminar'>
                    <button className='botones-edit-eliminar-button'><img src={iconEdit} alt="" /></button>
                    <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                  </td>
                </tr>
                <tr>
                  <td className='table-cuerpo-nro'>2</td>
                  <td className='table-td'>Ley  N° 482 DE GOBIERNOS AUTÓNOMOS</td>
                  <td><img src={iconPdf} alt="" /></td>
                  <td className='botones-edit-eliminar'>
                    <button className='botones-edit-eliminar-button'><img src={iconEdit} alt="" /></button>
                    <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                  </td>
                </tr>
                <tr>
                  <td className='table-cuerpo-nro'>3</td>
                  <td className='table-td'>Ley 018  DEL ÓRGANO ELECTORAL PLURINACIONAL</td>
                  <td><img src={iconPdf} alt="" /></td>
                  <td className='botones-edit-eliminar'>
                    <button className='botones-edit-eliminar-button'><img src={iconEdit} alt="" /></button>
                    <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                  </td>
                </tr>
                <tr>
                  <td className='table-cuerpo-nro'>4</td>
                  <td className='table-td'>Ley 073  DE DESLINDE JURISDICCIONAL</td>
                  <td><img src={iconPdf} alt="" /></td>
                  <td className='botones-edit-eliminar'>
                    <button className='botones-edit-eliminar-button'><img src={iconEdit} alt="" /></button>
                    <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                  </td>
                </tr>

        </tbody>
      </table>
    </div>
  )
}

import React from 'react'
import './styles/contentMunicipio.css'

import iconAyuda from '../assets/icons/help.svg'
import iconVer from '../assets/icons/ver.svg'
import iconCargar from '../assets/icons/upload.svg'
import iconVerMas from '../assets/icons/vermas.svg'
import iconEditAlcalde from '../assets/icons/editalcalde.svg'

import imgAlcalde from '../assets/images/alcalde.jpg'

function ContentMunicipio({ ubicacionDash, iconoDash, data }) {
    return (
        <div className='main-content-municipio'>
            <div className='titulo-ayuda'>
                <h2 className='titulo-ayuda-h2'>{ubicacionDash}</h2>
                <button className='titulo-ayuda-button'><img src={iconAyuda} alt="" className='titulo-ayuda-button-img' /></button>
            </div>

            <div className='lista-regiones'>
                <button className='boton-region'>Metropolitana</button>
                <button className='boton-region'>Valles Sur</button>
                <button className='boton-region'>Valles Norte</button>
                <button className='boton-region'>Yungas</button>
                <button className='boton-region'>Altiplano Sur</button>
                <button className='boton-region'>Altiplano Norte</button>
                <button className='boton-region'>Amazónica</button>
            </div>

            <div className='data-region'>
                <TablaMunicipios></TablaMunicipios>

                <DataAlcalde></DataAlcalde>

                <DocsDescargable></DocsDescargable>
            </div>
        </div>
    )
}

export default ContentMunicipio

function TablaMunicipios() {
    return (
        <table className='table-content-municipio'>
            <thead className='table-encabezado'>
                <tr>
                    <th className='columna-nro'>N°</th>
                    <th className='columna-municipio'>Municipios</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='table-cuerpo'>
                <tr>
                    <td className='table-cuerpo-nro'>1</td>
                    <td className='columna-municipio'>Mecapaca</td>
                    <td className='columna-ver'><button><img src={iconVer} alt="" /></button></td>
                </tr>
                <tr>
                    <td className='table-cuerpo-nro'>2</td>
                    <td className='columna-municipio'>La Paz</td>
                    <td className='columna-ver'><button><img src={iconVer} alt="" /></button></td>
                </tr>
                <tr>
                    <td className='table-cuerpo-nro'>3</td>
                    <td className='columna-municipio'>El Alto</td>
                    <td className='columna-ver'><button><img src={iconVer} alt="" /></button></td>
                </tr>
                <tr>
                    <td className='table-cuerpo-nro'>4</td>
                    <td className='columna-municipio'>Pucarani</td>
                    <td className='columna-ver'><button><img src={iconVer} alt="" /></button></td>
                </tr>
                <tr>
                    <td className='table-cuerpo-nro'>5</td>
                    <td className='columna-municipio'>Achocalla</td>
                    <td className='columna-ver'><button><img src={iconVer} alt="" /></button></td>
                </tr>
                <tr>
                    <td className='table-cuerpo-nro'>6</td>
                    <td className='columna-municipio'>Laja</td>
                    <td className='columna-ver'><button><img src={iconVer} alt="" /></button></td>
                </tr>
                <tr>
                    <td className='table-cuerpo-nro'>7</td>
                    <td className='columna-municipio'>Palca</td>
                    <td className='columna-ver'><button><img src={iconVer} alt="" /></button></td>
                </tr>
            </tbody>
        </table>
    )
}

function DataAlcalde() {
    return (
        <div className='data-alcalde'>
            <div className='alcalde-foto-edit'>
                <div className='img-alcalde'>
                    <img src={imgAlcalde} alt=""  />
                </div>
                <div>
                    <button className='icono-edit-alcalde'><img src={iconEditAlcalde} alt=""  /></button>
                </div>
            </div>
            <table className='tabla-alcalde'>
                <tr>
                    <td></td>
                    <td>ALCALDE</td>
                </tr>
                <tr>
                    <th>Nombres y Apellidos:</th>
                    <td>Constancio Gutierrez Catacora</td>
                </tr>
                <tr>
                    <th>Sigla:</th>
                    <td>Venceremos</td>
                </tr>
                <tr>
                    <th>Teléfono Institucional</th>
                    <td>2-2136503 - 71962029</td>
                </tr>
                <tr>
                    <th>Correo:</th>
                    <td>persona1@gmail.com</td>
                </tr>
                <tr>
                    <th>Dirección:</th>
                    <td>Av. 6 de marzo calle 4</td>
                </tr>
            </table>
        </div>
    )
}

function DocsDescargable() {
    return (
        <div className='docs-descargables'>
            <button className='boton-doc-descargable'>
                <div>
                    <p>PTDI-PEI</p>
                    <p>Fuente: Ministerio de Planificacion para el Desarrollo</p>
                </div>
                <img src={iconCargar} alt="" />
            </button>
            <button className='boton-doc-descargable'>
                <div>
                    <p>Ejecución Presupuestaria</p>
                    <p>Fuente: Ministerio de Economía y Finanzas</p>
                </div>
                <img src={iconCargar} alt="" />
            </button>
            <button className='boton-doc-descargable'>
                <div>
                    <p>POA</p>
                    <p>Fuente: Ministerio de Economía y Finanzas</p>
                </div>
                <img src={iconCargar} alt="" />
            </button>
            <button className='boton-doc-descargable'>
                <div>
                    <p>Datos Estadísticos</p>
                    <p>Fuente: Instituto Nacional de Estadística</p>
                </div>
                <img src={iconCargar} alt="" />
            </button>
            <button className='boton-doc-vermas'>
                <img src={iconVerMas} alt="" />
                <p>Ver más</p>
            </button>
        </div>
    )
}
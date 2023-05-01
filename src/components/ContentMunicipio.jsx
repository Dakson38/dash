import React, { useState } from 'react'
import './styles/contentMunicipio.css'

import iconAyuda from '../assets/icons/help.svg'
import iconVer from '../assets/icons/ver.svg'
import iconCargar from '../assets/icons/upload.svg'
import iconVerMas from '../assets/icons/vermas.svg'
import iconEditAlcalde from '../assets/icons/editalcalde.svg'

import imgAlcalde from '../assets/images/alcalde.jpg'
import Help from './Ayuda/Help'
import Formulario from './Formulario/Formulario'

function ContentMunicipio({ ubicacionDash, iconoDash, data }) {
    const [estadoModal, cambiarEstadoModal] = useState(false);
    const [estadoForm, cambiarEstadoForm] = useState(false);
    return (
        <div className='main-content-municipio'>
            <div className='titulo-ayuda'>
                <h2 className='titulo-ayuda-h2'>{ubicacionDash}</h2>

                <button className='titulo-ayuda-button' onClick={() => cambiarEstadoModal(!estadoModal)}><img src={iconAyuda} alt="" className='titulo-ayuda-button-img' /></button>
                <Help
                    titulo={ubicacionDash}
                    mostrarImagen={true}
                    estado={estadoModal}
                    cambiarEstado={cambiarEstadoModal} />

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

    const listaMunicipios = [
        {
            nro: 1,
            municipio: 'Mecapaca'
        },
        {
            nro: 2,
            municipio: 'La Paz'
        },
        {
            nro: 3,
            municipio: 'El Alto'
        },
        {
            nro: 4,
            municipio: 'Pucarani'
        },
        {
            nro: 5,
            municipio: 'Achocalla'
        },
        {
            nro: 6,
            municipio: 'Laja'
        },
        {
            nro: 7,
            municipio: 'Palca'
        }
    ]

    return (
        <table className='table-content-municipio'>
            <thead className='table-encabezado'>
                <tr>
                    <th className='columna-nro'>N°</th>
                    <th className='columna-municipio'>Municipio</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className='table-cuerpo'>
                {
                    listaMunicipios.map(objMunicipio => (
                        <tr key={objMunicipio.nro}>
                            <td className='table-cuerpo-nro'>{objMunicipio.nro}</td>
                            <td className='columna-municipio'>{objMunicipio.municipio}</td>
                            <td className='columna-ver'><button className='table-cuerpo-ver-municipio'><img src={iconVer} alt="" /></button></td>
                        </tr>
                    )
                    )
                }
            </tbody>
        </table>
    )
}

function DataAlcalde() {
    const [estadoForm, cambiarEstadoForm] = useState(false);
    return (
        <div className='data-alcalde'>
            <div className='alcalde-foto-edit'>
                <div className='img-alcalde'>
                    <img src={imgAlcalde} alt="" />
                </div>
                <div>
                    <button className='icono-edit-alcalde' onClick={() => cambiarEstadoForm(!estadoForm)}><img src={iconEditAlcalde} alt="" /></button>
                    <Formulario
                        titulo={'Alcalde'}
                        mostrarAlcalde={true}
                        estado={estadoForm}
                        cambiarEstado={cambiarEstadoForm}
                    />
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
                    <p className='parrafos-doc-descargable'>PTDI-PEI</p>
                    <p className='parrafos-doc-descargable'>Fuente: Ministerio de Planificacion para el Desarrollo</p>
                </div>
                <img src={iconCargar} alt="" />
            </button>
            <button className='boton-doc-descargable'>
                <div>
                    <p className='parrafos-doc-descargable'>Ejecución Presupuestaria</p>
                    <p className='parrafos-doc-descargable'>Fuente: Ministerio de Economía y Finanzas</p>
                </div>
                <img src={iconCargar} alt="" />
            </button>
            <button className='boton-doc-descargable'>
                <div>
                    <p className='parrafos-doc-descargable'>POA</p>
                    <p className='parrafos-doc-descargable'>Fuente: Ministerio de Economía y Finanzas</p>
                </div>
                <img src={iconCargar} alt="" />
            </button>
            <button className='boton-doc-descargable'>
                <div>
                    <p className='parrafos-doc-descargable'>Datos Estadísticos</p>
                    <p className='parrafos-doc-descargable'>Fuente: Instituto Nacional de Estadística</p>
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
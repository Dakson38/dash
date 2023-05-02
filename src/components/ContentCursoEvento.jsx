import React, { useState } from 'react'
import iconAyuda from '../assets/icons/help.svg'
import iconEditar from '../assets/icons/editar.svg'
import iconEliminar from '../assets/icons/eliminar.svg'

import './styles/contentCursoEvento.css'
import Help from './Ayuda/Help'
import Formulario from './Formulario/Formulario'


function ContentCursoEvento({ ubicacionDash, iconoDash, data }) {
    const [estadoModal, cambiarEstadoModal] = useState(false);
    const [estadoForm, cambiarEstadoForm] = useState(false);

    let colum;
    if (ubicacionDash == 'Cursos') {
        colum = 'Párrafo';
    } else {
        colum = 'Resúmen';
    }

    return (
        <div className='main-content-curso-evento'>

            <div className='titulo-ayuda'>
                {/**Titulo Cursos o Eventos */}
                <h2 className='titulo-ayuda-h2'>{ubicacionDash}</h2>

                {/**Boton de ayuda sobre como usar estas secciones */}
                <button className='titulo-ayuda-button' onClick={() => cambiarEstadoModal(!estadoModal)}><img src={iconAyuda} alt="" className='titulo-ayuda-button-img' /></button>
                <Help
                    titulo={ubicacionDash}
                    mostrarImagen={true}
                    estado={estadoModal}
                    cambiarEstado={cambiarEstadoModal} />
            </div>
            
            {/**Boton de agregar curso o evento */}
            <div>
                <button className='boton-agregar-button' onClick={() => cambiarEstadoForm(!estadoForm)}><img src={iconoDash} alt="" />Añadir {ubicacionDash}</button>
                <Formulario
                    titulo={ubicacionDash}
                    mostrarCurso={true}
                    estado={estadoForm}
                    cambiarEstado={cambiarEstadoForm}
                />
            </div>

            {/**Tabla con los datos sobre los cursos o eventos */}
            <table className='table-content'>
                <thead className='table-encabezado'>
                    <tr >
                        <th className='columna-nro'>N°</th>
                        <th className='table-td'>Título</th>
                        <th className='table-td'>{colum}</th>
                        <th className='botones-edit-eliminar-button'></th>
                    </tr>
                </thead>
                <tbody className='table-cuerpo'>
                    {
                        data.map(
                            info => (
                                <tr key={info.id}>
                                    <td className='table-cuerpo-nro'>{info.id}</td>
                                    <td className='table-td'>{info.titulo}</td>
                                    <td className='table-td'>{info.parrafo}</td>
                                    <td className='botones-edit-eliminar'>
                                        <button className='botones-edit-eliminar-button'><img src={iconEditar} alt="" /></button>
                                        <button className='botones-edit-eliminar-button'><img src={iconEliminar} alt="" /></button>
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default ContentCursoEvento

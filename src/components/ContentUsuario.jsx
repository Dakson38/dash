import React, { useState } from 'react'
import './styles/contentUsuario.css'
import iconAyuda from '../assets/icons/help.svg'
import iconEditar from '../assets/icons/editar.svg'
import iconEliminar from '../assets/icons/eliminar.svg'

import Help from './Ayuda/Help'
import FormNormUsuario from './Formulario/FormNormUsuario'

function ContentUsuario({ ubicacionDash, iconoDash, data }) {
    const [estadoModal, cambiarEstadoModal] = useState(false);
    const [estadoForm, cambiarEstadoForm] = useState(false);

    return (
        <div className='main-content-usuario'>
            <div className='titulo-ayuda'>
                <h2 className='titulo-ayuda-h2'>{ubicacionDash}</h2>

                <button className='titulo-ayuda-button' onClick={() => cambiarEstadoModal(!estadoModal)}><img src={iconAyuda} alt="" className='titulo-ayuda-button-img' /></button>
                <Help
                    titulo={ubicacionDash}
                    mostrarImagen={true}
                    estado={estadoModal}
                    cambiarEstado={cambiarEstadoModal} />

            </div>
            <div>
                <button className='boton-agregar-button' onClick={() => cambiarEstadoForm(!estadoForm)}><img src={iconoDash} alt="" />Añadir Usuario</button>
                <FormNormUsuario
                    titulo={'Usuario'}
                    estado={estadoForm}
                    cambiarEstado={cambiarEstadoForm}
                />
            </div>
            <table className='table-content'>
                <thead className='table-encabezado'>
                    <tr className='table-content-tr'>
                        <th className='columna-nro'>N°</th>
                        <th className='table-cuerpo-telefono'>Teléfono</th>
                        <th className='table-cuerpo-usuario'>Usuario</th>
                        <th className='table-cuerpo-nomApe'>Nombres y Apellidos</th>
                        <th className='table-cuerpo-estado'>Estado</th>
                        <th className='botones-edit-eliminar-button'></th>
                    </tr>
                </thead>
                <tbody className='table-cuerpo'>
                    {
                        data.map(
                            info => (
                                <tr key={info.id} className='table-content-tr'>
                                    <td className='table-cuerpo-nro'>{info.id}</td>
                                    <td className='table-cuerpo-telefono'>{info.telefono}</td>
                                    <td className='table-cuerpo-usuario'>{info.usuario}</td>
                                    <td className='table-cuerpo-nomApe'>{info.nomApe}</td>
                                    <td className='table-cuerpo-estado'><p>{info.estado}</p></td>
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

export default ContentUsuario

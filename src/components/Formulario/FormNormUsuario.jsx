import React, { useState } from 'react'
import Switch from '@material-ui/core/Switch';
import '../styles/formNormUsuario.css'

import iconSubirArchivo from '../../assets/icons/uploadForm.svg'

function FormNormUsuario({ titulo, estado, cambiarEstado }) {
    return (
        <>{estado &&
            <div className='main-form'>
                <div className='contenedor-form-norm-usu'>
                    <h1>Nuevo {titulo}</h1>
                    <form action="" className='form-total-norm-usuario'>
                        {titulo === 'Grupo' ? <FormGrupo /> : ''}
                        {titulo === 'Documento' ? <FormDocumento /> : ''}
                        {titulo === 'Usuario' ? <FormUsuario /> : ''}
                        <div className='form-botones-cancelar-enviar-norm'>
                            <button onClick={() => cambiarEstado(false)} className='form-boton-cancelar'>Cancelar</button>
                            <input type="submit" value="Guardar" className='form-boton-guardar' />
                        </div>
                    </form>
                </div>
            </div>

        }

        </>
    )
}

export default FormNormUsuario

function FormGrupo() {
    return (
        <>
            <label htmlFor="titulo">Nombre</label>
            <input type="text" name="titulo" id="titulo" className='input-text' />
        </>
    )
}

function FormDocumento() {
    const [archivo, setArchivo] = useState(null);
    function manejarArchivoSeleccionado(evento) {
        setArchivo(evento.target.files[0]);
    }
    return (

        <>
            <label htmlFor="subtitle">Título</label>
            <input type="text" name="subtitle" id="subtitle" className='input-text' />

            <label htmlFor="archivo" className='form-boton-archivo'>
                Subir Documento
                <img src={iconSubirArchivo} alt="" />
            </label>
            <input type="file" accept='.pdf' name="archivo" id="archivo" onChange={manejarArchivoSeleccionado} className='form-boton-subir-imagen' />
            <div className='form-archivo-pdf-norm'>
                {archivo && <p>Archivo Seleccionado: {archivo.name}</p>}
            </div>
        </>
    )
}

function FormUsuario() {
    const [estado, setEstado] = useState(false);

    function manejarCambioEstado(evento) {
        setEstado(evento.target.checked);
    }
    return (
        <>
            <label htmlFor="telefono">Teléfono</label>
            <input type="text" name="telefono" id="telefono" className='input-text' />

            <label htmlFor="usuario">Usuario</label>
            <input type="text" name="usuario" id="usuario" className='input-text' />

            <label htmlFor="nomape">Nombres y Apellidos</label>
            <input type="text" name="nomape" id="nomape" className='input-text' />

            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" className='input-text' />

            <label htmlFor="titulo">
                Estado <br />
                <Switch
                    checked={estado}
                    onChange={manejarCambioEstado}
                    color={estado ? 'primary' : 'secondary'}
                />
                {estado ? 'Habilitado' : 'Inhabilitado'}
            </label>
        </>
    )
}
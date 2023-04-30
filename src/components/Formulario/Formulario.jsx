import React, { useState } from 'react'
import '../styles/formulario.css'

import iconSubirArchivo from '../../assets/icons/uploadForm.svg'

function Formulario({ titulo, mostrarCurso, mostrarEvento, mostrarAlcalde, estado, cambiarEstado }) {
    const [archivo, setArchivo] = useState(null);

    function manejarArchivoSeleccionado(evento) {
        setArchivo(evento.target.files[0]);
    }

    return (
        <>{estado &&
            <div className='main-form'>
                <div className='contenedor-form'>
                    <h1>Añadir {titulo}</h1>
                    <form action="" className='form-total'>
                        <div className='form-total-info'>
                            <div className='form-text'>
                                {titulo === 'Cursos' ? <MostrarCurso /> : ''}
                                {titulo === 'Eventos' ? <MostrarEvento /> : ''}
                                {titulo === 'Alcalde' ? <MostrarAlcalde/>: ''}
                            </div>
                            <div className='form-img'>
                                <label htmlFor="imagen">
                                    Agregar Imágen
                                    <img src={iconSubirArchivo} alt="" />
                                </label>
                                <input type="file" accept='.jpg,.png' name="imagen" id="imagen" onChange={manejarArchivoSeleccionado} className='form-boton-subir-imagen' />
                                {archivo && <p>Archivo Seleccionado: {archivo.name}</p>}
                                {archivo && <img src={URL.createObjectURL(archivo)} className='form-imagen-subida' />}
                            </div>
                        </div>
                        <div className='form-botones-cancelar-enviar'>
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

export default Formulario


function MostrarCurso() {
    return (
        <>
            <label htmlFor="titulo">Título</label>
            <input type="text" name="titulo" id="titulo" className='input-text' />

            <label htmlFor="parrafo">Párrafo</label>
            <textarea name="parrafo" id="parrafo" className='input-textarea'></textarea>
        </>
    )
}

function MostrarEvento() {
    return (
        <>
            <label htmlFor="titulo">Título</label>
            <input type="text" name="titulo" id="titulo" className='input-text' />

            <label htmlFor="resumen">Resúmen</label>
            <textarea name="resumen" id="resumen" className='input-textarea'></textarea>

            <label htmlFor="parrafo">Párrafo</label>
            <textarea name="parrafo" id="parrafo" className='input-textarea'></textarea>
        </>
    )
}

function MostrarAlcalde() {
    return (
        <>
            <label htmlFor="titulo">Nombres y Apellidos</label>
            <input type="text" name="titulo" id="titulo" className='input-text' />

            <label htmlFor="titulo">Sigla</label>
            <input type="text" name="titulo" id="titulo" className='input-text' />

            <label htmlFor="titulo">Teléfono</label>
            <input type="tel" name="titulo" id="titulo" className='input-text' />

            <label htmlFor="titulo">Correo</label>
            <input type="email" name="titulo" id="titulo" className='input-text' />

            <label htmlFor="titulo">Dirección</label>
            <input type="text" name="titulo" id="titulo" className='input-text' />
        </>
    )
}
import React, { useState } from 'react'
import '../styles/help.css'

import imgAyuda from '../../assets/images/imageAyuda.jpg'

import iconBotonAgregarUsuario from '../../assets/icons/botonAgregarUsuario.svg'
import iconBotonAgregarCurso from '../../assets/icons/botonAgregarCurso.svg'
import iconBotonAgregarEvento from '../../assets/icons/botonAgregarEvento.svg'
import iconBotonCrearGrupo from '../../assets/icons/botonCrearGrupo.svg'
import iconBotonAgregarDocumento from '../../assets/icons/botonAgregarDocumento.svg'

import iconCerrar from '../../assets/icons/cerrar.svg'
import iconEdit from '../../assets/icons/editar.svg'
import iconEliminar from '../../assets/icons/eliminar.svg'
import iconVer from '../../assets/icons/ver.svg'
import iconEditMunicipio from '../../assets/icons/editMunicipio.svg'
import iconSubir from '../../assets/icons/upload.svg'
import iconVermas from '../../assets/icons/vermas.svg'
import iconPdf from '../../assets/icons/pdf.svg'

function Help({ titulo, mostrarImagen, estado, cambiarEstado }) {

    const infoUsuario = [
        {
            id: 1,
            parrafo: 'En esta sección encontrarás un listado de todos los usuarios que tienen acceso al panel administrativo, junto con información sobre si están habilitados para acceder o no. Además, podrás agregar nuevos u suarios, editar la información existente y eliminar usuarios según sea necesario. Con el siguiente puedes añadir a más usuarios.',
            icono: iconBotonAgregarUsuario
        },
        {
            id: 2,
            parrafo: 'Al presionar el siguiente botón, se abrirá un formulario para editar los datos de manera  rápida y sencilla.',
            icono: iconEdit
        },
        {
            id: 3,
            parrafo: 'Al hacer clic en este botón, podrás eliminar al usuario de forma sencilla. Un mensaje de confirmación aparecerá en la pantalla para asegurarte de que realmente deseas eliminar al usuario.',
            icono: iconEliminar
        }
    ]

    return (
        <>
            {estado &&
                <div className='main-help'>
                    <div className='contenedor-help'>
                        <div className='contenedor-help2'>
                            {mostrarImagen &&
                                <img src={imgAyuda} alt="" className='img-help' />
                            }
                            <div className='informacion-help'>
                                <div className='informacion-help-cerrar'>
                                    <button onClick={() => cambiarEstado(false)}><img src={iconCerrar} alt="" /></button>
                                </div>
                                <h2>{titulo}</h2>

                                {titulo === 'Cursos' ? <AyudaCurso/>:''}
                                {titulo === 'Eventos' ? <AyudaEvento/>:''}
                                {titulo === 'Usuarios' ? <AyudaUsuario/>:''}
                                {titulo === 'Normativas' ? <AyudaNormativa/>:''}
                                {titulo === "PDF's" ? <AyudaPdf/>:''}
                                {titulo === 'Municipios' ? <AyudaMunicipio/>:''}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Help

function AyudaUsuario() {
    return (
        <>
            <div className='informacion-help-info'>
                <p>
                    En esta sección encontrarás un listado de todos los usuarios que tienen acceso al panel administrativo, junto con información sobre si están habilitados para acceder o no. Además, podrás agregar nuevos u suarios, editar la información existente y eliminar usuarios según sea necesario. Con el siguiente puedes añadir a más usuarios.
                </p>
                <img src={iconBotonAgregarUsuario} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                    Al presionar el siguiente botón, se abrirá un formulario para editar los datos de manera  rápida y sencilla.
                </p>
                <img src={iconEdit} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                    Al hacer clic en este botón, podrás eliminar al usuario de forma sencilla. Un mensaje de confirmación aparecerá en la pantalla para asegurarte de que realmente deseas eliminar al usuario.
                </p>
                <img src={iconEliminar} alt="" />
            </div>
        </>
    )
}

function AyudaCurso() {
    return (
        <>
            <div className='informacion-help-info'>
                <p>
                En esta sección, se muestra una lista de todos los cursos disponibles, además, tendrás la posibilidad de editar y eliminar los datos de los cursos disponibles. Podrás cambiar el título del curso, modificar su descripción y actualizar la imagen que lo acompaña. Todo esto lo podrás hacer de manera sencilla y rápida, permitiéndote tener siempre la información actualizada. Además, podrás añadir nuevos cursos con el siguiente bóton.
                </p>
                <img src={iconBotonAgregarCurso} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                Al presionar el siguiente botón, se abrirá un formulario para editar los datos de manera  rápida y sencilla.
                </p>
                <img src={iconEdit} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                Al hacer clic en este botón, podrás eliminar el curso de forma sencilla. Un mensaje de confirmación aparecerá en la pantalla para asegurarte de que realmente deseas eliminar el curso.
                </p>
                <img src={iconEliminar} alt="" />
            </div>
        </>
    )
}

function AyudaEvento() {
    return (
        <>
            <div className='informacion-help-info'>
                <p>
                En esta sección encontrarás una lista de eventos programados y realizados que podrás editar, eliminar o actualizar su imagen. Con tan solo unos clics, podrás mantener la información actualizada y atractiva para que los usuarios siempre estén al tanto de los eventos que se están llevando a cabo. Además, podrás añadir nuevos eventos utilizando el siguiente botón.
                </p>
                <img src={iconBotonAgregarEvento} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                Al presionar el siguiente botón, se abrirá un formulario para editar los datos de manera  rápida y sencilla.
                </p>
                <img src={iconEdit} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                Al hacer clic en este botón, podrás eliminar el evento de forma sencilla. Un mensaje de confirmación aparecerá en la pantalla para asegurarte de que realmente deseas eliminar el evento.
                </p>
                <img src={iconEliminar} alt="" />
            </div>
        </>
    )
}

function AyudaNormativa() {
    return (
        <>
            <div className='informacion-help-info'>
                <p>
                En esta sección encontrarás una lista de grupos normativos, cada uno de los cuales incluye sus leyes y reglamentos correspondientes. Además, al oprimir el siguiente botón crearás un nuevo grupo.
                </p>
                <img src={iconBotonCrearGrupo} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                Al presionar este botón, se desplegará una lista de leyes y reglamentos del grupo normativo en el costado derecho de la pantalla. Cada elemento de la lista se resaltará en verde cuando se seleccione y en celeste cuando no.
                </p>
                <img src={iconVer} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                Al hacer clic en este botón, podrás eliminar el grupo normativo y su contenido de forma sencilla. Un mensaje de confirmación aparecerá en la pantalla para asegurarte de que realmente deseas eliminar el grupo normativo.
                </p>
                <img src={iconEliminar} alt="" />
            </div>
        </>
    )
}

function AyudaPdf() {
    return (
        <>
            <div className='informacion-help-info'>
                <p>
                En esta sección encontrarás una lista de archivos PDF junto con su nombre, que podrás editar o eliminar según sea necesario. Con solo unos clics, podrás mantener la lista de archivos actualizada y organizada para facilitar su acceso y uso. Con el siguiente botón puedes añadir más PDF’s.
                </p>
                <img src={iconBotonAgregarDocumento} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                Al hacer clic en el siguiente icono, se abrirá una nueva pestaña que mostrará el contenido del archivo PDF.
                </p>
                <img src={iconPdf} alt="" />
            </div> 
            <div className='informacion-help-info'>
                <p>
                Al hacer clic en el siguiente icono, podrás editar el nombre del archivo y actualizar el archivo PDF que estará disponible.
                </p>
                <img src={iconEdit} alt="" />
            </div>
            <div className='informacion-help-info'>
                <p>
                Al hacer clic en este botón, podrás eliminar el PDF y su contenido de forma sencilla. Un mensaje de confirmación aparecerá en la pantalla para asegurarte de que realmente deseas eliminar el PDF.
                </p>
                <img src={iconEliminar} alt="" />
            </div>
        </>
    )
}

function AyudaMunicipio() {
    return (
        <>
            <div className='informacion-help-info'>
                <p>
                En esta sección se muestra en la parte superior las 7 regiones de las cuales puedes oprimir en cualquiera y ver los municipio que contiene.<br/>
                Al presionar el siguiente botón, se mostrará información del Municipio y cambiara de color para indicar que es el seleccionado. 
                </p>
                <img src={iconVer} alt="" className='iconos-help-ver'/>
            </div>
            <div className='informacion-help-info'>
                <p>
                Una vez seleccionado el municipio, en la parte derecha se mostrará la información de su alcalde y sus respectivos documentos. <br/>
                Para editar la información del Alcalde, se oprime en el siguiente botón, que desplegara un formulario.
                </p>
                <img src={iconEditMunicipio} alt="" className='iconos-help'/>
            </div>
            <div className='informacion-help-info'>
                <p>
                Para editar los documentos del municipio, se oprime en el siguiente botón, donde solo se sube el pdf, y el nombre del mismo se actualizara donde la fuente de información.
                </p>
                <img src={iconSubir} alt="" className='iconos-help'/>
            </div>
            <div className='informacion-help-info'>
                <p>
                Al oprimir el siguiente boton podras ver más información.
                </p>
                <img src={iconVermas} alt="" className='iconos-help'/>
            </div>
        </>
    )
}

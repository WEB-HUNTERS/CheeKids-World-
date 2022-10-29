import React, { useState } from 'react'
import '../styles/styleCliente.css';
import Inicio from './Inicio';
import datos from '../archivo.json';

const Cliente = () => {

    const volver = () => {
        setBarra(barra = <Inicio />)
        setInicio(inicio = "")
        setVisualizar(visualizar = [])
    }

    function inicializacion() {
        setInicio(inicio = imagen)
        setVisualizar(visualizar = [])
    }

    function visualizacion() {
        setInicio(inicio = "")
        setVisualizar(visualizar = datos)
    }

    let init = <div className='blockCliente'>
        <button onClick={inicializacion} className='buttonCliente'>Inicio</button>
        <button onClick={visualizacion} className='buttonCliente'>Visualizar</button>
        {/* <button className='buttonCliente'>Modificar</button> */}
        <button onClick={volver} className='buttonCliente'>Volver</button>
    </div>

    // eslint-disable-next-line jsx-a11y/alt-text
    let imagen = <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/03/292405-tipo-usuario-facebook.jpg" />

    let [barra, setBarra] = useState(init)
    let [inicio, setInicio] = useState(imagen)
    let [visualizar, setVisualizar] = useState([])

    return (
        <div>
            {barra}
            {inicio}
            <div className='contenedor-objetos'>
                {visualizar.map((elem, index) => {
                    return (
                        <div className='objetos' key={elem.id}>
                            <img src={elem.imagen} />
                            <h2>{elem.nombreProducto}</h2>
                            <p>{elem.descripcion}</p>
                            <small>{elem.cantidad}</small>
                            {/* <strong>Objeto {index + 1} - </strong>{`${elem.id}: ${elem.nombre} ${elem.apellido} ${elem.edad}`} */}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Cliente;
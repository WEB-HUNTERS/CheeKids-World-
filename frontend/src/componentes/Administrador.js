import React, { useState } from 'react'
import '../styles/styleAdministrador.css';
import Inicio from './Inicio';
import datos from '../archivo.json';
const Administrador = () => {

    function volver() {
        setBarra(barra = <Inicio />)
        setModificar(modificar="")
        setCrear(crear="")
    }
    function change(event){
        let id = event.target.value
        let values= datos.find(ele=>ele.id == id)
        setSelectedOption(id)
        console.log(id)
        document.getElementById("editaNombre").value=values.nombreProducto
        document.getElementById("editaDescripcion").value=values.descripcion
        document.getElementById("editaCantidad").value=values.cantidad
    }
    const [selectedOption, setSelectedOption] = useState('');
    function modificacion() {
        setCrear(crear="")
        let mod = 
        <div>
            <select onChange={change} value={selectedOption}>
                <option value="">Selecciona una opcion</option>
                {
                    datos.map((ele,ind)=>{
                        return (<option value={ele.id} key={ele.id}>{ele.nombreProducto}</option>)
                    })
                }
            </select>
            <br/>
            <label>Nombre Producto</label>
            <br/>
            <input type="text" id="editaNombre"/>
            <br/>
            <label>descripcion</label>
            <br/><input type="text" id='editaDescripcion'/>
            <br/>
            <label>Cantidad</label><br/><input type="number" id='editaCantidad'/>
        </div>
        setModificar(modificar = mod)
    }
    function creacion() {
        setModificar(modificar="")
        let mod = 
        <div>
            <label>Nombre Producto</label>
            <br/>
            <input type="text" />
            <br/>
            <label>descripcion</label>
            <br/><input type="text" />
            <br/>
            <label>Cantidad</label><br/><input type="number" />
        </div>
        setCrear(mod)
    }
    let init = <div className='blockAdmin'>
                    <button onClick={creacion} className='buttonAdmin'>Agregar</button>
                    <button onClick={modificacion} className='buttonAdmin'>Editar</button>
                    <button className='buttonAdmin'>Eliminar</button>
                    <button onClick={volver} className='buttonAdmin'>Volver</button>
                </div>

    let [barra, setBarra] = useState(init)
    let [modificar, setModificar] = useState("")
    let [crear,setCrear] = useState("")
    return (
        <div>
            {barra}
            {crear}
            {modificar}
        </div>
    )
}

export default Administrador;
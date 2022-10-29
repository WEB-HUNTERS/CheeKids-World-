import React, {useState} from 'react';
import '../styles/styleInicio.css';
import Administrador from './Administrador';
import Cliente from './Cliente';

const Inicio = () => {

    let init = <div>
                    <h1>Página de Inicio</h1>
                    <button onClick={vistaCliente} className='buttonInicio'>Cliente</button>
                    <button onClick={vistaAdmin} className='buttonInicio'>Administrador</button>
                </div>

    let [estado, setEstado] = useState(init)

    function vistaCliente() {
        setEstado(estado = <Cliente />)
    }

    function vistaAdmin() {
        setEstado(estado = <Administrador />)
    }

    return(
        <div>
            {estado}
        </div>
    )
}

export default Inicio;
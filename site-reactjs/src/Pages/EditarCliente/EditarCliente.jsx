import React from "react"
import FormularioClientes from "../../Components/FormularioClientes/FormularioClientes"
import {useParams} from 'react-router-dom';


function EditarCliente() {
    const params = useParams();
    const idCliente = params.id;    
    return(
        <div>
            <FormularioClientes method={"put"} idCliente={idCliente} action={`http://localhost:3000/Clientes/${idCliente}`}></FormularioClientes>
        </div>
    )
}

export default EditarCliente
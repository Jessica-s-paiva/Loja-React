import React from "react"
import { useNavigate } from 'react-router-dom';

function LinhaCliente({cliente, excluir}){
    const navigate = useNavigate();
    function editar(){
        navigate(`/EditarCliente/${cliente.ID}`);
    }
    return(
        <tr>
            <td>{cliente.CPF}</td>
            <td>{cliente.EMAIL}</td>
            <td>{cliente.ENDERECO}</td>
            <td>{cliente.SEXO}</td>
            <td>{cliente.DATA_NASCIMENTO}</td>
            <td>{cliente.CELULAR}</td>
            <td>
                <button onClick={editar}>editar</button>
                <button onClick={excluir}>excluir</button>
            </td>
        </tr>
    )
}

export default LinhaCliente
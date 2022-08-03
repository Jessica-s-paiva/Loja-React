import styles from './TabelaClientes.module.css'
import FormularioClientes from "../FormularioClientes/FormularioClientes";
import LinhaCliente from "../LinhaCliente/LinhaCliente";
import React, {useState, useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

function TabelaClientes(){
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
      handleRequisition();
    }, []);
    useEffect(() => {
        excluir();
      }, []);

    const navigate = useNavigate();

    async function handleRequisition() {
      const url = `http://localhost:3000/clientes/`;
      const requisition = await fetch(url);
      const json = await requisition.json();
      setClientes(json);
    }

    function excluir(idCliente){
        const url = `http://localhost:3000/clientes/${idCliente}`;
        fetch(url, {method: 'DELETE'})
            .then(()=> {
                for(let i=0; i<clientes.length; i++){
                    if(clientes[i].ID === idCliente){
                        clientes.splice(i, 1);
                        let newClientes = [...clientes];
                        setClientes(newClientes);
                        return;
                    }
                }
            });
    }

    function criarNovoCliente(){
        navigate('/NovoCliente');
    }

    return(
        <div className={styles.TabelaClientes}>
            <table>
                <thead>
                    <tr>
                    <th>CPF</th>
                    <th>EMAIL</th>
                    <th>ENDERECO</th>
                    <th>SEXO</th>
                    <th>DATA DE NASCIMENTO</th>
                    <th>CELULAR</th>
                    <th><img src="./icone-editar.png" alt="Editar" height='18' width='18'/></th>
                    </tr>
                
                </thead>
                <tbody>
                {
                    !!clientes && clientes.map((cliente, index)=>{
                        return (<LinhaCliente cliente={cliente} excluir={() => { excluir(cliente.ID) }} key={index}/>)
                    })
                }
                <tr>
                    <td colSpan="6"></td>
                    <td> 
                        <button onClick={criarNovoCliente}>+</button>
                    </td>
                </tr>
                </tbody>  
            </table>
        </div>

    )
}

export default TabelaClientes
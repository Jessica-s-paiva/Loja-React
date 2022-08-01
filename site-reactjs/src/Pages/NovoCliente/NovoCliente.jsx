import React from "react";
import FormularioClientes from "../../Components/FormularioClientes/FormularioClientes";

function NovoCliente(){
    return(
        <div>
            <FormularioClientes method={'post'} action={'http://localhost:3000/clientes/'} headerText={'Insira os dados do cliente'}/>
        </div>
    );
};

export default NovoCliente;
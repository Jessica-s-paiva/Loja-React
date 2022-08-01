import styles from './FormularioClientes.module.css'
import React from 'react';

class FormularioClientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cpf: '',
            email: '',
            endereco: '',
            sexo: '',
            dataNascimento: '',
            celular: ''
        }
        this.headerText = props.headerText;
        this.action = props.action;
        this.method = props.method;
        this.idCliente = props.idCliente;
        this.handleChange = this.handleChange.bind(this);
        this.click = this.click.bind(this);
    }
    componentDidMount() {
         // Se passar o id do cliente, então precisa preencher o state.
         if (this.idCliente !== undefined) {
            this.preencherFormulario();    
        }
    }
    preencherFormulario() {
        var that = this;
        const url = `http://localhost:3000/clientes/${this.idCliente}`;
        fetch(url).then(res=> {
            return res.json();                
        })
        .then(json => {
            // Sai da função se o json não tiver a prop length ou se a prop length for igual a 0.
            if (!json.length) {
                return;
            }
            const cliente = json.pop();
            that.setState({["cpf"]: cliente.CPF});
            that.setState({["email"]: cliente.EMAIL});
            that.setState({["endereco"]: cliente.ENDERECO});
            that.setState({["sexo"]: cliente.SEXO});
            that.setState({["dataNascimento"]: cliente.DATA_NASCIMENTO});
            that.setState({["celular"]: cliente.CELULAR});
        });        
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    click(e) {
        e.preventDefault();
        const form = {
            "CPF": this.state.cpf,
            "EMAIL": this.state.email,
            "ENDERECO": this.state.endereco,
            "SEXO": this.state.sexo,
            "DATA_NASCIMENTO": this.state.dataNascimento,
            "CELULAR": this.state.celular,
            "DATA_INSERCAO": this.method === "post" ? new Date() : null
        }
        const url = this.action;
        fetch(url, {method: this.method, headers: {'Content-Type': 'application/json'}, body: JSON.stringify(form)})
        .then(()=> {
            // Navega para a lista de clientes
            document.location.href = "/Clientes";
        });
    }
    render() {
        return(
        <div>
            <form className={styles.FormularioClientes}>
                <h3>{this.headerText}</h3><br />
                <label>CPF</label>
                <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleChange}/><br />
                <label>EMAIL</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br />

                <label>ENDEREÇO</label>
                <input type="text" name="endereco" value={this.state.endereco} onChange={this.handleChange}/><br />

                <label>SEXO</label>
                <input type="text" name="sexo" value={this.state.sexo} onChange={this.handleChange}/><br />

                <label>DATA DE NASCIMENTO</label>
                <input type="date" name="dataNascimento" value={this.state.dataNascimento} onChange={this.handleChange}/><br />

                <label>CELULAR</label>
                <input type="text" name="celular" value={this.state.celular} onChange={this.handleChange}/><br />
                <input type="button" value="SALVAR" onClick={this.click} />
            </form>            
        </div>
        )
    }
}

export default FormularioClientes
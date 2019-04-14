import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";
import firebase from "../API/firebase";

class FormularioEmpleado extends React.Component{
    constructor(){
        super();
        this.state = {
            data: {
                ci: "",
                nombre: "",
                salario: "",
                fecha_de_nacimiento: "",
                tipo: "",
                horas: "",
                comision: "",
            },
            comboBoxLista: []
        }
    }
    componentDidMount() {
        this.obtenerTiposDeEmpleado();
    }
    obtenerTiposDeEmpleado() {
        firebase.database().ref('/tipo').on('value', listaDeElementos => this.obtenerTiposDeFirebase(listaDeElementos));
    }
    obtenerTiposDeFirebase(listaDeElementos) {
            listaDeElementos.forEach(elemento => this.añadirTiposAlaLista(elemento));
            this.actualizarComboBoxLista();
    }
    añadirTiposAlaLista(tipo) {
        this.state.comboBoxLista.push(this.convertirFormatoComboBox(tipo.val()));
    }
    convertirFormatoComboBox(val) {
        var {id, tipo} = val;
        return <option key={id} value={tipo}>{tipo}</option>
    }
    actualizarComboBoxLista(){
        this.setState({comboBoxLista: this.state.comboBoxLista});
    }
    onChange = e => 
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
        
    onSubmit = () => {
        this.props.submit(this.state.data);
    }
    render(){
        const { data, comboBoxLista } = this.state;
        var campoHoras = <Form.Field>
                            <label htmlFor="horas">Horas</label>
                            <input  
                                id="horas" 
                                name="horas" 
                                placeholder="horas" 
                                value={data.horas}    
                                onChange={this.onChange}
                            />
                        </Form.Field>
        var campoComision = <Form.Field>
                                <label htmlFor="comision">Comision</label>
                                <input  
                                    id="comision" 
                                    name="comision" 
                                    placeholder="110" 
                                    value={data.comision}    
                                    onChange={this.onChange}
                                />
                            </Form.Field>
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="nombre">Nombre</label>
                    <input  
                        id="nombre" 
                        name="nombre" 
                        placeholder="Jose Daniel Oropeza Soria" 
                        value={data.nombre}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="ci">CI</label>
                    <input  
                        id="ci" 
                        name="ci" 
                        placeholder="7711450" 
                        value={data.ci}    
                        onChange={this.onChange}
                    />
                </Form.Field>  
                <Form.Field>
                    <label htmlFor="salario">Salario</label>
                    <input  
                        id="salario" 
                        name="salario" 
                        placeholder="9000" 
                        value={data.salario}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="fecha_de_nacimiento">Fecha de nacimiento</label>
                    <input
                        type="date"  
                        id="fecha_de_nacimiento" 
                        name="fecha_de_nacimiento"  
                        value={data.fecha_de_nacimiento} 
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="tipo">Tipo</label>
                    <select  id="tipo" name="tipo" value={data.tipo} onChange={this.onChange}>
                        {comboBoxLista}
                    </select>
                </Form.Field>
                {this.state.data.tipo==="parcial"? campoHoras: ""} 
                {this.state.data.tipo==="comision"? campoComision: ""} 
                <Button primary>Registrar Empleado</Button>
            </Form>
        );
    }
}

FormularioEmpleado.propTypes = {
    submit: PropTypes.func.isRequired
}
export default FormularioEmpleado;
